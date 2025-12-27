import { Button } from "@/components/ui/button";
import { useWizardFormStep } from "@/store/useWIzardFormStep";
import { FormWebsiteType } from "@/types/website.types";
import { UseFormReturn } from "react-hook-form";
import { useShallow } from "zustand/shallow";

export default function ButtonWizardForm({ form }: { form: UseFormReturn<FormWebsiteType> }) {
  const { step, totalSteps, nextStep, prevStep } = useWizardFormStep(
    useShallow((s) => ({
      step: s.step,
      totalSteps: s.totalSteps,
      nextStep: s.nextStep,
      prevStep: s.prevStep,
    }))
  );

  const handleNextButton = async () => {
    const isValid = await form.trigger();

    if (isValid) nextStep();
  };

  const handlePrevButton = () => {
    prevStep();
  };

  return (
    <section className='flex justify-between max-w-4xl mx-auto px-4 py-10'>
      <Button type='button' variant='outline' disabled={step <= 1} className='hover:bg-transparent' onClick={handlePrevButton}>
        Kembali
      </Button>
      <Button type='button' onClick={handleNextButton}>
        {step < totalSteps ? "Selanjutnya" : "Publish Website"}
      </Button>
    </section>
  );
}
