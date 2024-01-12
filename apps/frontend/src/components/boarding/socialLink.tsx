"use client";
import React from "react";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { formSchema } from "./boarding";
import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { boardingState } from "@/store/atoms/boarding/boarding";
import { useSetRecoilState } from "recoil";

type SocialLinkBoardingProps = {
  form: UseFormReturn<z.infer<typeof formSchema>>;
};

export const SocialLinkBoarding = ({ form }: SocialLinkBoardingProps) => {
  const setBoarding = useSetRecoilState(boardingState);
  return (
    <>
      <div className="flex h-full flex-col gap-4">
        <h1 className="text-2xl font-bold">Social Details</h1>
        <div className="flex flex-col gap-4 h-full">
          {/* GitHub Link Field */}
          <FormField
            control={form.control}
            name="githubLink"
            render={({ field }) => (
              <FormItem>
                <FormLabel>GitHub Link</FormLabel>
                <FormControl>
                  <Input
                    className="bg-[#282828] rounded-[20px] border border-white/40 placeholder:text-white/60"
                    placeholder="https://github.com/yourusername"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          {/* LinkedIn Link Field */}
          <FormField
            control={form.control}
            name="linkedinLink"
            render={({ field }) => (
              <FormItem>
                <FormLabel>LinkedIn Link</FormLabel>
                <FormControl>
                  <Input
                    className="bg-[#282828] rounded-[20px] border border-white/40 placeholder:text-white/60"
                    placeholder="https://linkedin.com/in/yourusername"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          {/* Twitter Link Field */}
          <FormField
            control={form.control}
            name="twitterLink"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Twitter Link</FormLabel>
                <FormControl>
                  <Input
                    className="bg-[#282828] rounded-[20px] border border-white/40 placeholder:text-white/60"
                    placeholder="https://twitter.com/yourusername"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <div className="w-[100%] flex justify-between">
          <Button
            onClick={() => {
              setBoarding(1);
            }}
            tone="dark"
            type="button"
            className="py-2 px-4 w-fit border border-white/40"
          >
            Back
          </Button>
          <Button
            onClick={() => {
              setBoarding(3);
            }}
            type="button"
            tone="bright"
            className="py-2 px-4 w-fit"
          >
            Next
          </Button>
        </div>
      </div>
    </>
  );
};
