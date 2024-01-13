"use client";
import React, { useState } from "react";
import { z } from "zod";
import { formSchema } from "./boarding";
import { UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import TextareaAutosize from "react-textarea-autosize";
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
import { ErrorMessage } from "@hookform/error-message";
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

  const [usernameError, setUsernameError] = useState(false);

  function checkingIfUsernameIsUnique(e: React.ChangeEvent<HTMLInputElement>) {
    const usernames = ["@abhi1992002", "@abhi", "@hello", "@hi"];
    if (usernames.includes(e.currentTarget.value)) {
      setUsernameError(true);
    } else {
      setUsernameError(false);
    }
  }

  return (
    <>
      <div className="flex flex-col gap-4 justify-between h-full">
        <h1 className="text-2xl font-bold">Basic Details</h1>
        <div className="flex gap-8 flex-col h-full">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username *</FormLabel>
                <FormControl>
                  <Input
                    {...form.register("username", {
                      required: "This is required",
                    })}
                    className="bg-[#282828] rounded-[20px] border border-white/40 placeholder:text-white/60"
                    placeholder="Enter your username"
                    {...field}
                    onChange={(e) => {
                      form.setValue("username", e.currentTarget.value);
                      checkingIfUsernameIsUnique(e);
                    }}
                  />
                </FormControl>
                <ErrorMessage
                  errors={form.formState.errors}
                  name="username"
                  render={({ message }) => (
                    <p className="text-xs text-red-500">{message}</p>
                  )}
                />
                {usernameError && (
                  <FormMessage className="text-xs text-red-500">
                    Please add unique username
                  </FormMessage>
                )}
              </FormItem>
            )}
          />

          {/* Role Field */}
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Role{" "}
                  <span className="text-xs ml-2 text-white/60">(optional)</span>
                </FormLabel>
                <FormControl>
                  <Input
                    {...form.register("role")}
                    className="bg-[#282828] rounded-[20px] border border-white/40 placeholder:text-white/60"
                    placeholder="Enter your role"
                    {...field}
                  />
                </FormControl>
                <ErrorMessage
                  errors={form.formState.errors}
                  name="role"
                  render={({ message }) => (
                    <p className="text-xs text-red-500">{message}</p>
                  )}
                />
              </FormItem>
            )}
          />

          {/* user Profile Field */}
          <FormField
            control={form.control}
            name="userImg"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Profile Image
                  <span className="text-xs ml-2 text-white/60">(optional)</span>
                </FormLabel>
                <FormControl>
                  <Input
                    {...form.register("userImg")}
                    type="file"
                    accept={"image/*"}
                    className="bg-[#282828] rounded-[20px] border border-white/40 placeholder:text-white/60  text-white hover:cursor-pointer file:text-white/60"
                    {...field}
                  />
                </FormControl>
                <ErrorMessage
                  errors={form.formState.errors}
                  name="userImg"
                  render={({ message }) => (
                    <p className="text-xs text-red-500">{message}</p>
                  )}
                />
              </FormItem>
            )}
          />

          {/* Small Description Field */}
          <FormField
            control={form.control}
            name="smallDescription"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Small Description
                  <span className="text-xs ml-2 text-white/60">(optional)</span>
                </FormLabel>
                <FormControl>
                  <TextareaAutosize
                    {...form.register("smallDescription")}
                    placeholder="Add small description about you"
                    className="bg-[#222222] border border-[#2F2E2E] py-3 px-3 placeholder:text-[#7D7D7D] outline-none rounded-[10px] text-sm w-[100%]"
                    {...field}
                  />
                </FormControl>
                <ErrorMessage
                  errors={form.formState.errors}
                  name="smallDescription"
                  render={({ message }) => (
                    <p className="text-xs text-red-500">{message}</p>
                  )}
                />
              </FormItem>
            )}
          />

          {/* Full Description Field */}
          <FormField
            control={form.control}
            name="fullDescription"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Full Description
                  <span className="text-xs ml-2 text-white/60">(optional)</span>
                </FormLabel>
                <FormControl className="h-fit">
                  <TextareaAutosize
                    {...form.register("fullDescription")}
                    placeholder="Add full description about you"
                    className="bg-[#222222] border border-[#2F2E2E] py-3 px-3 placeholder:text-[#7D7D7D] outline-none rounded-[10px] text-sm w-[100%]"
                    {...field}
                  />
                </FormControl>
                <ErrorMessage
                  errors={form.formState.errors}
                  name="fullDescription"
                  render={({ message }) => (
                    <p className="text-xs text-red-500">{message}</p>
                  )}
                />
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
                    <FormLabel>
                      Country
                      <span className="text-xs ml-2 text-white/60">
                        (optional)
                      </span>
                    </FormLabel>
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
          <div className="block">
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
      </div>
    </>
  );
};
