import { create } from "zustand";
import { WebsiteBaseTypeInput } from "../types/site.types";

type PreviewWebsiteState = {
  data: WebsiteBaseTypeInput | null;
  setPreview: (data: WebsiteBaseTypeInput) => void;
  clearPreview: () => void;
};

export const usePreviewWebsite = create<PreviewWebsiteState>((set) => ({
  data: null,
  setPreview: (data) => set({ data }),
  clearPreview: () => set({ data: null }),
}));
