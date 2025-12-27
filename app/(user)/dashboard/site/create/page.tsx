"use client";
import CreateWebsiteForm from "./_components/CreateWebsiteForm";
import { Check } from "lucide-react";
import { useEffect } from "react";
import { useWizardFormStep } from "@/store/useWIzardFormStep";
import { useShallow } from "zustand/shallow";

const steps = [
  { id: 1, title: "Bisnis" },
  { id: 2, title: "Produk" },
  { id: 3, title: "Tema" },
];

export default function CreateSite() {
  const { step, totalSteps, setTotalSteps } = useWizardFormStep(
    useShallow((s) => ({
      step: s.step,
      totalSteps: s.totalSteps,
      setTotalSteps: s.setTotalSteps,
    }))
  );

  useEffect(() => {
    setTotalSteps(steps.length);
  }, [setTotalSteps]);

  return (
    <section className='min-h-screen bg-gray-50'>
      <section className='max-w-4xl mx-auto px-4 py-10 space-y-10 text-center'>
        <section className='bg-white p-8 rounded-xl shadow'>
          <div className='flex justify-between items-center'>
            <p className='font-bold md:text-xl'>Buat Profil Bisnis Anda</p>
            <span className='text-sm'>
              Langkah {step} dari {totalSteps}
            </span>
          </div>
          <div className='flex justify-between mt-4'>
            {steps.map((currentStep) => (
              <div
                key={currentStep.id}
                className={`flex flex-col items-center  ${step === currentStep.id ? "text-black" : "text-gray-500"} ${
                  step > currentStep.id && "text-green-600"
                }`}
              >
                <div className='w-10 h-10 bg-gray-100 p-2 rounded-full '>
                  <span>{step > currentStep.id ? <Check /> : currentStep.id}</span>
                </div>
                <span>{currentStep.title}</span>
              </div>
            ))}
          </div>
        </section>
      </section>
      <section className='max-w-4xl mx-auto px-4'>
        <CreateWebsiteForm step={step} />
      </section>
    </section>
  );
}
