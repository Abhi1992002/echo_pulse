"use client";
import React, { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { UseFieldArrayAppend, useFieldArray, useForm } from "react-hook-form";

import { Form } from "@/components/ui/form";
import axios from "axios";
import * as z from "zod";
import { BasicBoarding } from "./basic";
import { SocialLinkBoarding } from "./socialLink";
import { TimelineBoarding } from "./timeline";
import { useRecoilState, useRecoilValue } from "recoil";
import { boardingState } from "@/store/atoms/boarding/boarding";
import { useMutation } from "@tanstack/react-query";

import { toaster } from "@/lib/toast";
import { redirect } from "next/navigation";

export const workExperienceSchema = z.object({
  heading: z.string().max(100).optional(),
  content: z.string().max(500).optional(),
  date: z.date().optional(),
});
export const educationSchema = z.object({
  heading: z.string().max(100).optional(),
  content: z.string().max(500).optional(),
  date: z.date().optional(),
});

export const formSchema = z.object({
  username: z.string().min(2).max(50),
  githubLink: z.string().optional(),
  linkedinLink: z.string().optional(),
  twitterLink: z.string().optional(),
  smallDescription: z.string().max(200).optional(),
  countryCode: z.string().max(2).optional(),
  countryName: z.string().optional(),
  userImg: z.string().optional(),
  role: z.string().optional(),
  fullDescription: z.string().max(500).optional(),
  workExperiences: z.array(workExperienceSchema).optional(),
  education: z.array(educationSchema).optional(),
});

type BoardingProps = {};

export const BoardingForm = ({}: BoardingProps) => {
  const [boarding, setBoarding] = useRecoilState(boardingState);

  const [loading, setLoading] = useState(false);

  const mutation = useMutation({
    mutationFn: (form: z.infer<typeof formSchema>) => {
      const response = axios.post("/api/users/createUser", form, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      return response;
    },
    onSuccess: () => {
      toaster({
        message: "user Created",
      });
      setLoading(false);
      redirect("/dashboard/home/all");
    },
    onError: () => {
      setBoarding(1);
      toaster({
        message: "Please try again",
        type: "error",
      });
      setLoading(false);
    },
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      githubLink: "",
      linkedinLink: "",
      twitterLink: "",
      smallDescription: "",
      userImg: "",
      countryCode: "",
      countryName: "",
      role: "",
      fullDescription: "",
      workExperiences: [{ heading: "", date: new Date(), content: "" }],
      education: [{ heading: "", date: new Date(), content: "" }],
    },
  });
  const {
    fields: educationFields,
    append: educationAppend,
    remove: educationRemove,
  } = useFieldArray({
    control: form.control,
    name: "education",
  });
  const {
    fields: workFields,
    append: workAppend,
    remove: workRemove,
  } = useFieldArray({
    control: form.control,
    name: "workExperiences",
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    // mutation.mutate(values);
  }

  function onError() {
    setBoarding(1);
  }

  return (
    <div className="w-[100%] h-[100%] overflow-auto scrollbar pr-[20px] pl-[10px]">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit, onError)}
          className="space-y-8 w-[100%] h-full"
        >
          {boarding === 1 && <BasicBoarding form={form} />}

          {boarding === 2 && <SocialLinkBoarding form={form} />}

          {boarding === 3 && (
            <TimelineBoarding
              form={form}
              workAppend={
                workAppend as UseFieldArrayAppend<z.infer<typeof formSchema>>
              }
              workRemove={workRemove}
              workFields={workFields}
              educationAppend={
                educationAppend as UseFieldArrayAppend<
                  z.infer<typeof formSchema>
                >
              }
              educationFields={educationFields}
              educationRemove={educationRemove}
            />
          )}
        </form>
      </Form>
    </div>
  );
};
