import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import GlobalStyle from "@/styles/global";
import theme from "@/styles/theme";
import { ListUserResgistrations } from "@/Models/User";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();
  const [headerTheme, setHeaderTheme] = useState<"light" | "blue">("blue");
  const [user, setUser] = useState<ListUserResgistrations | null>(null);

  useEffect(() => {
    const userItem = localStorage.getItem("user");
    if (userItem) {
      setUser(JSON.parse(userItem) as ListUserResgistrations);
    }
  }, []);

  useEffect(() => {
    if (
      router.asPath === "/" ||
      router.asPath === "/user-registration" ||
      router.asPath === "/login" ||
      router.asPath === "/flood-registration"
    ) {
      setHeaderTheme("light");
    } else {
      setHeaderTheme("blue");
    }
  }, [router.asPath]);

  return (
    <ThemeProvider theme={theme}>
      <Header
        colorTheme={headerTheme}
        route={router.asPath}
        user={user || null}
      />
      <Component {...pageProps} />
      <GlobalStyle />
      <Footer />
    </ThemeProvider>
  );
};

export default MyApp;
