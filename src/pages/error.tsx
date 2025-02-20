// components/ErrorPage.tsx
import React from "react";
import { useRouter } from "next/router";

const ErrorPage: React.FC = () => {
  const router = useRouter();
  const { message } = router.query;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-semibold mb-4 text-center text-red-600">
          Error
        </h1>
        <p className="mb-4 text-center text-gray-700">{message}</p>
        <button
          onClick={() => router.push("/")}
          className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
