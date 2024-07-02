'use client';

import AuthLoginForm from "@/components/ui/auth/AuthLoginForm";


export default function Page() {
  return (
    <div className="relative mb-5 space-y-2 w-full">
      <h4 className="text-2xl font-semibold mb-4 text-primary-content">
        Sign in to Slash
      </h4>

      {/* <div className="flex items-center space-x-1">
        <p className="text-sm">New user?</p>
        <Link
          href={"/auth/signup"}
          className="text-sm font-semibold text-blue-500 hover:underline"
        >
          Create an account
        </Link>
      </div> */}

      <AuthLoginForm />
    </div>
  );
}
