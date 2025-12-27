import { create } from "zustand";

type WizardFormStep = {
  step: number;
  totalSteps: number;
  setTotalSteps: (total: number) => void;
  nextStep: () => void;
  prevStep: () => void;
};

export const useWizardFormStep = create<WizardFormStep>((set) => ({
  step: 1,
  totalSteps: 1,
  setTotalSteps: (total) => set({ totalSteps: total }),
  nextStep: () =>
    set((state) => ({
      step: Math.min(state.step + 1, state.totalSteps),
    })),
  prevStep: () =>
    set((state) => ({
      step: Math.max(state.step - 1, 1),
    })),
}));
