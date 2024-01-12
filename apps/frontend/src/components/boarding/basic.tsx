"use client";
import React from "react";
import { z } from "zod";
import { formSchema } from "./boarding";
import {
  Controller,
  useFieldArray,
  useForm,
  UseFormReturn,
} from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import { boardingState } from "@/store/atoms/boarding/boarding";
import { useSetRecoilState } from "recoil";
const countryCodes = require("country-codes-list");

type BasicBoardingProps = {
  form: UseFormReturn<z.infer<typeof formSchema>>;
};

export const BasicBoarding = ({ form }: BasicBoardingProps) => {
  const setBoarding = useSetRecoilState(boardingState);
  const myCountryCodesObject = countryCodes.customList(
    "countryCode",
    "{countryNameEn}"
  );

  const countryCodeArray = Object.keys(myCountryCodesObject);
  const countryNameArray = Object.values(myCountryCodesObject);

  return (
    <>
      <div className="flex flex-col gap-4 justify-between h-full">
        <h1 className="text-2xl font-bold">Basic Details</h1>
        <div className="flex gap-4 flex-col h-full">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    className="bg-[#282828] rounded-[20px] border border-white/40 placeholder:text-white/60"
                    placeholder="Enter your username"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          {/* Role Field */}
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Role</FormLabel>
                <FormControl>
                  <Input
                    className="bg-[#282828] rounded-[20px] border border-white/40 placeholder:text-white/60"
                    placeholder="Enter your role"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          {/* Small Description Field */}
          <FormField
            control={form.control}
            name="smallDescription"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Small Description</FormLabel>
                <FormControl>
                  <Input
                    className="bg-[#282828] rounded-[20px] border border-white/40 placeholder:text-white/60"
                    placeholder="Enter a short description"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          {/* Full Description Field */}
          <FormField
            control={form.control}
            name="fullDescription"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Description</FormLabel>
                <FormControl>
                  <Input
                    className="bg-[#282828] rounded-[20px] border border-white/40 placeholder:text-white/60"
                    placeholder="Enter a detailed description"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <div className="w-[100%] flex items-end gap-4 justify-between">
            {/* Country Code Field */}

            <FormField
              control={form.control}
              name="countryCode"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="bg-[#282828] rounded-[20px] border border-white/40">
                        <SelectValue placeholder="Code" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-[#282828] border border-white/40">
                      <SelectGroup className="bg-[#282828]">
                        {countryNameArray.map((country, i) => {
                          return (
                            <SelectItem
                              key={countryCodeArray[i]}
                              className="bg-[#282828]  text-white/60"
                              value={countryCodeArray[i]}
                            >
                              {country as string}
                            </SelectItem>
                          );
                        })}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Country Name Field */}
            <FormField
              control={form.control}
              name="countryName"
              render={({ field }) => (
                <FormItem className="w-[100%]">
                  <FormControl>
                    <Input
                      className="bg-[#282828] rounded-[20px] border border-white/40 w-[100%] placeholder:text-white/60"
                      placeholder="Enter country name"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="w-full">
          <Button
            type="button"
            onClick={() => {
              setBoarding(2);
            }}
            tone="bright"
            className="py-2 w-fit px-4 float-end"
          >
            Next
          </Button>
        </div>
      </div>
    </>
  );
};
