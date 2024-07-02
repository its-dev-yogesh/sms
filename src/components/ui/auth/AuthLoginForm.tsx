'use client';
import { z } from "zod";

import IconButton from "@/components/Button/IconButton";
import { loginFormInterface } from "@/interfaces/formInterfaces/login.interface";
import { zodResolver } from '@hookform/resolvers/zod';
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
const schema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.number().min(18, { message: 'You must be at least 18 years old' })
});
// Define the default values for the form
const defaultValues: Partial<loginFormInterface> = {
  email: 'email@example.com',
};
const AuthLoginForm: React.FC = () => {
  const methods = useForm<loginFormInterface>({resolver:zodResolver(schema)});
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = methods;

  const onSubmit: SubmitHandler<loginFormInterface> = (data: any) =>
    console.log(data);
  
  return (
    <>
        {/* <FormProvider {...methods}> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div  className="space-y-3">
          {/* Error Alert */}
          <div className="hidden p-3 text-red-700 bg-red-200 rounded">
            Error message here
          </div>

          {/* Email Input */}
          <div className="w-full">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-primary-content"
            >
              Email address
              {/* <SlashInputText
                name="email"
                variant="soft"
                className="min-w-full"
              /> */}
            </label>
            <input {...register("email")} />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-primary-content"
            >
              Password
            </label>

            {/* <SlashInputPassword
              name="password"
              // id="password"
              defaultValue=""
              variant="soft"
            /> */}
              <input {...register("password")} />
            {errors.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
          </div>
        </div>
        {/* Forgot Password Link */}
        <div className="flex justify-end mt-2">
          <Link href="/reset-password" className="text-sm underline">
            Forgot password?
          </Link>
        </div>

        {/* Submit Button */}
        <IconButton
          type="submit"
          className="w-full py-2 my-2 text-white bg-black rounded"
          buttonLabel="Login"
        />

        <div className="divider w-full my-4 font-normal text-lg text-black">
          or
        </div>

        {/* Login with Google and Facebook */}
        <div className="w-full flex justify-center space-x-4">
          <IconButton 
            variant="text"
            icon="flat-color-icons:google"
            width={30}
            showIcon
            disabled
            showTooltip
            tooltipText="Coming Soon"
          />
          <IconButton
            variant="text"
            icon="devicon:facebook"
            width={30}
            showIcon
            disabled
            showTooltip
            tooltipText="Coming Soon"
          />
        </div>
      </form>
      {/* </FormProvider> */}
    </>
  )
}

export default AuthLoginForm;
