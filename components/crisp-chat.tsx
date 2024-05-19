"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("c597833d-2ffd-4d6d-b00d-dbcebee1012e");
  }, []);

  return null;
};
