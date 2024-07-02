// components/MyForm.tsx
'use client';

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import FormInput from './FormInput';

// Define the schema using Zod
const schema = z.object({
  username: z.string().min(1, 'Username is required'),
  email: z.string().email('Invalid email address'),
});

type FormData = z.infer<typeof schema>;

const MyForm: React.FC = () => {
  const { handleSubmit, control } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormInput<FormData> name="username" control={control} label="Username" />
      <FormInput<FormData> name="email" control={control} label="Email" type="email" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
