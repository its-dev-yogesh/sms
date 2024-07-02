// components/FormInput.tsx
import React from 'react';
import { useController, UseControllerProps, FieldValues } from 'react-hook-form';

interface FormInputProps<T extends FieldValues> extends UseControllerProps<T> {
  label: string;
  type?: string;
}

const FormInput = <T extends FieldValues>({ label, type = 'text', ...props }: FormInputProps<T>) => {
  const {
    field,
    fieldState: { error },
  } = useController(props);

  return (
    <div>
      <label>{label}</label>
      <input {...field} type={type} />
      {error && <p>{error.message}</p>}
    </div>
  );
};

export default FormInput;
