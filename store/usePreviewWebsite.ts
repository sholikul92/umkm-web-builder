import { create } from "zustand";
import { FormWebsiteType } from "@/types/website.types";

type PreviewWebsiteState = {
  data: FormWebsiteType | null;
  setPreview: (data: FormWebsiteType) => void;
  clearPreview: () => void;
};

export const usePreviewWebsite = create<PreviewWebsiteState>((set) => ({
  data: null,
  setPreview: (data) => set({ data }),
  clearPreview: () => set({ data: null }),
}));
