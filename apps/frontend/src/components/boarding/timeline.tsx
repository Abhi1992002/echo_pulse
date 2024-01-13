"use client";
import React, { useEffect } from "react";
import {
  FieldArrayWithId,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
  UseFormReturn,
} from "react-hook-form";
import { format } from "date-fns";
import { z } from "zod";
import { educationSchema, formSchema, workExperienceSchema } from "./boarding";
import { FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useSetRecoilState } from "recoil";
import { boardingState } from "@/store/atoms/boarding/boarding";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../ui/calendar";

type TimelineBoardingProps = {
  form: UseFormReturn<z.infer<typeof formSchema>>;
  workRemove: UseFieldArrayRemove;
  workAppend: UseFieldArrayAppend<z.infer<typeof formSchema>>;
  workFields: FieldArrayWithId<z.infer<typeof educationSchema>>[];
  educationRemove: UseFieldArrayRemove;
  educationAppend: UseFieldArrayAppend<z.infer<typeof formSchema>>;
  educationFields: FieldArrayWithId<z.infer<typeof educationSchema>>[];
};

export const TimelineBoarding = ({
  form,
  workAppend,
  workFields,
  workRemove,
  educationAppend,
  educationFields,
  educationRemove,
}: TimelineBoardingProps) => {
  const setBoarding = useSetRecoilState(boardingState);

  return (
    <>
      <div className="flex flex-col h-full gap-8">
        <h1 className="text-2xl font-bold">Timeline</h1>
        <div className="h-full flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h3>Work Experiences</h3>
            {workFields.map((item, index) => (
              <div key={item.id} className="flex flex-col gap-4">
                <div className="w-[100%] flex gap-4">
                  <FormField
                    control={form.control}
                    name={`workExperiences.${index}.date`}
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <Popover>
                          <PopoverTrigger
                            className="bg-[#282828] rounded-[20px] border border-white/40 placeholder:text-white/60"
                            asChild
                          >
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-[240px] pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent
                            className="w-auto p-0 bg-[#282828] border border-white/40"
                            align="start"
                          >
                            <Calendar
                              mode="single"
                              className="bg-[#282828] rounded-[20px] text-white disabled:text-white/40"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) =>
                                date > new Date() ||
                                date < new Date("1900-01-01")
                              }
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>

                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex-2">
                    <FormField
                      control={form.control}
                      name={`workExperiences.${index}.heading`}
                      render={({ field }) => (
                        <FormControl className="w-[100%]">
                          <Input
                            placeholder="Work"
                            {...field}
                            className="bg-[#282828] rounded-[20px] border border-white/40 placeholder:text-white/60"
                          />
                        </FormControl>
                      )}
                    />
                  </div>

                  <div className="flex-1">
                    <FormField
                      control={form.control}
                      name={`workExperiences.${index}.content`}
                      render={({ field }) => (
                        <FormControl>
                          <Input
                            placeholder="About it"
                            {...field}
                            className="bg-[#282828] rounded-[20px] border border-white/40 placeholder:text-white/60"
                          />
                        </FormControl>
                      )}
                    />
                  </div>
                </div>

                <Button
                  tone="dark"
                  className="border border-white/40 w-fit"
                  type="button"
                  onClick={() => workRemove(index)}
                >
                  Remove
                </Button>
              </div>
            ))}
            <Button
              type="button"
              tone="bright"
              className="w-fit py-2"
              onClick={() =>
                workAppend({ heading: "", content: "", date: new Date() })
              }
            >
              Add Work Experience
            </Button>
          </div>

          <div className="flex flex-col gap-4">
            <h3>Education</h3>
            {educationFields.map((item, index) => (
              <div key={item.id} className="flex flex-col gap-4">
                <div className="w-[100%] flex gap-4">
                  <FormField
                    control={form.control}
                    name={`education.${index}.date`}
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <Popover>
                          <PopoverTrigger
                            className="bg-[#282828] rounded-[20px] border border-white/40 placeholder:text-white/60"
                            asChild
                          >
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-[240px] pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent
                            className="w-auto p-0 bg-[#282828] border border-white/40"
                            align="start"
                          >
                            <Calendar
                              mode="single"
                              className="bg-[#282828] rounded-[20px] text-white disabled:text-white/40"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) =>
                                date > new Date() ||
                                date < new Date("1900-01-01")
                              }
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>

                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex-2">
                    <FormField
                      control={form.control}
                      name={`education.${index}.heading`}
                      render={({ field }) => (
                        <FormControl className="w-[100%]">
                          <Input
                            placeholder="Institution"
                            {...field}
                            className="bg-[#282828] rounded-[20px] border border-white/40 placeholder:text-white/60"
                          />
                        </FormControl>
                      )}
                    />
                  </div>

                  <div className="flex-1">
                    <FormField
                      control={form.control}
                      name={`education.${index}.content`}
                      render={({ field }) => (
                        <FormControl>
                          <Input
                            placeholder="About it"
                            {...field}
                            className="bg-[#282828] rounded-[20px] border border-white/40 placeholder:text-white/60"
                          />
                        </FormControl>
                      )}
                    />
                  </div>
                </div>

                <Button
                  tone="dark"
                  className="border border-white/40 w-fit"
                  type="button"
                  onClick={() => educationRemove(index)}
                >
                  Remove
                </Button>
              </div>
            ))}
            <Button
              type="button"
              tone="bright"
              className="w-fit py-2"
              onClick={() =>
                educationAppend({ heading: "", content: "", date: new Date() })
              }
            >
              Add Education
            </Button>
          </div>

          <div className="w-[100%] flex justify-between float-end">
            <Button
              onClick={() => {
                setBoarding(2);
              }}
              tone="dark"
              type="button"
              className="py-2 px-4 w-fit border border-white/40"
            >
              Back
            </Button>
            <Button type="submit" tone="bright" className="py-2 px-4 w-fit">
              Submit
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
