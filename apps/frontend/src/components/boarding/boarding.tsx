"use client";
import React, { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { UseFieldArrayAppend, useFieldArray, useForm } from "react-hook-form";

import { Form } from "@/components/ui/form";

import * as z from "zod";
import { BasicBoarding } from "./basic";
import { SocialLinkBoarding } from "./socialLink";
import { TimelineBoarding } from "./timeline";
import { useRecoilValue } from "recoil";
import { boardingState } from "@/store/atoms/boarding/boarding";

export const workExperienceSchema = z.object({
  heading: z.string().min(2).max(100).optional(),
  content: z.string().min(2).max(500).optional(),
  date: z.date().optional(),
});
export const educationSchema = z.object({
  heading: z.string().min(2).max(100),
  content: z.string().min(2).max(500),
  date: z.date(),
});

export const formSchema = z.object({
  username: z.string().min(2).max(50),
  coverImg: z.string().url().optional(),
  githubLink: z.string().url().optional(),
  linkedinLink: z.string().url().optional(),
  twitterLink: z.string().url().optional(),
  smallDescription: z.string().max(200).optional(),
  countryCode: z.string().max(2).optional(),
  countryName: z.string().optional(),
  role: z.string().optional(),
  fullDescription: z.string().max(500).optional(),
  workExperiences: z.array(workExperienceSchema).optional(),
  education: z.array(educationSchema).optional(),
});

type BoardingProps = {};

export const BoardingForm = ({}: BoardingProps) => {
  const boarding = useRecoilValue(boardingState);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      coverImg: "",
      githubLink: "",
      linkedinLink: "",
      twitterLink: "",
      smallDescription: "",
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

  useEffect(() => {}, [form.watch("countryCode")]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="w-[100%] h-[100%] overflow-auto scrollbar pr-[20px] pl-[10px]">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
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
