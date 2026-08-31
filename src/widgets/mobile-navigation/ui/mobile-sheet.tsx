import type { RefObject } from "react";

import type { Rubric } from "@/entities/rubric/model/types";

import type { MobileSheetName } from "../model/types";
import { MobileSheetContent } from "./mobile-sheet-content";

type MobileSheetProps = {
  activeSheet: MobileSheetName | null;
  dialogRef: RefObject<HTMLDivElement | null>;
  rubrics: Rubric[];
  onClose: () => void;
};

/** Доступная модальная оболочка мобильного меню, независимая от его содержимого. */
export function MobileSheet({ activeSheet, dialogRef, rubrics, onClose }: MobileSheetProps) {
  if (!activeSheet) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <button
        aria-label="Закрыть меню"
        className="bg-scrim absolute inset-0"
        onClick={onClose}
        type="button"
      />
      <div
        aria-label="Мобильное меню"
        aria-modal="true"
        className="bg-panel absolute inset-x-0 bottom-0 max-h-[82dvh] overflow-y-auto rounded-t-3xl pb-[calc(1.25rem+env(safe-area-inset-bottom))] outline-none"
        ref={dialogRef}
        role="dialog"
        tabIndex={-1}
      >
        <div aria-hidden="true" className="bg-border mx-auto mt-3 h-1 w-10 rounded-full" />
        <MobileSheetContent rubrics={rubrics} sheet={activeSheet} />
      </div>
    </div>
  );
}
