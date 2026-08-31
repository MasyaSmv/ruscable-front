"use client";

import { useEffect, useRef, useState } from "react";

import type { Rubric } from "@/entities/rubric/model/types";

import type { MobileSheetName } from "../model/types";
import { MobileSheet } from "./mobile-sheet";
import { MobileTabbar } from "./mobile-tabbar";

/** Управляет единственным клиентским состоянием общего каркаса — мобильной шторкой. */
export function MobileNavigation({ rubrics }: { rubrics: Rubric[] }) {
  const [activeSheet, setActiveSheet] = useState<MobileSheetName | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);

  function closeSheet() {
    setActiveSheet(null);
  }

  function openSheet(sheet: MobileSheetName, trigger: HTMLButtonElement) {
    triggerRef.current = trigger;
    setActiveSheet(sheet);
  }

  useEffect(() => {
    if (!activeSheet) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setActiveSheet(null);
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      triggerRef.current?.focus();
    };
  }, [activeSheet]);

  return (
    <>
      <MobileTabbar activeSheet={activeSheet} onOpen={openSheet} />
      <MobileSheet
        activeSheet={activeSheet}
        dialogRef={dialogRef}
        onClose={closeSheet}
        rubrics={rubrics}
      />
    </>
  );
}
