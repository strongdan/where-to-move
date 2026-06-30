"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

const clarityProjectId = "xfbz4eyc6v";
let initialized = false;

export function MicrosoftClarity() {
  useEffect(() => {
    if (initialized) return;
    initialized = true;
    Clarity.init(clarityProjectId);
  }, []);

  return null;
}
