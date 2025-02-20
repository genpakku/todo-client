import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { AuthProvider, useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import "../globals.css";

// MyAppコンポーネントを変更しない方法でログインの確認を行う
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ProtectedComponent Component={Component} pageProps={pageProps} />
    </AuthProvider>
  );
}

function ProtectedComponent({
  Component,
  pageProps,
}: {
  Component: React.ComponentType<unknown>;
  pageProps: Record<string, unknown>;
}) {
  const { user } = useAuth(); // useAuthをAuthProvider内で使う
  const router = useRouter(); // useRouterフックを使ってrouterを取得

  useEffect(() => {
    if (!user && router.pathname !== "/login") {
      router.push("/login"); // ログインしていない場合、ログインページへリダイレクト
    }
  }, [user, router]);

  return <Component {...pageProps} />;
}

export default MyApp;
