"use client";
import { ClerkProvider } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { EdgeStoreProvider } from "../../lib/edgestore";
type ProviderProps = {
  children: React.ReactNode;
};
import { RecoilRoot } from "recoil";

export const Provider = ({ children }: ProviderProps) => {
  return (
    <>
      <ClerkProvider>
        <BrowserRouter>
          <EdgeStoreProvider>
            <RecoilRoot>{children}</RecoilRoot>
          </EdgeStoreProvider>
        </BrowserRouter>
      </ClerkProvider>
    </>
  );
};
