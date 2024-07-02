import { ReactNode } from 'react';
import { FormProvider, UseFormReturn } from 'react-hook-form';

interface FormContainerProps {
  children: ReactNode;
  methods: UseFormReturn;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const FormContainer = ({
  children,
  onSubmit,
  methods
}: FormContainerProps) => {
  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>{children}</form>
    </FormProvider>
  );
};
