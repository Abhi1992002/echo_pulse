"use client";
import { ClerkProvider } from "@clerk/nextjs";
import React from "react";
import { EdgeStoreProvider } from "../../lib/edgestore";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
type ProviderProps = {
  children: React.ReactNode;
};
import { RecoilRoot } from "recoil";

export const Provider = ({ children }: ProviderProps) => {
  const queryClient = new QueryClient();
  return (
    <>
      <ClerkProvider>
        <QueryClientProvider client={queryClient}>
          <EdgeStoreProvider>
            <RecoilRoot>{children}</RecoilRoot>
          </EdgeStoreProvider>
        </QueryClientProvider>
      </ClerkProvider>
    </>
  );
};
