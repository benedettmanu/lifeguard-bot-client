import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { FaInstagram, FaFacebookSquare, FaArrowUp } from "react-icons/fa";

import StyledFooter from "./styles";

const Footer: React.FC = () => {
  const router = useRouter();
  const isHomePage =
    router.pathname === "/" ||
    router.pathname === "/user-registration" ||
    router.pathname === "/login" ||
    router.pathname === "/flood-registration";

  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  }, []);

  return (
    <StyledFooter isHomePage={isHomePage}>
      <section id="footer">
        <div id="copyright">
          <p>Bot Salva-Vidas © {new Date().getFullYear()}</p>
          <p>
            by{" "}
            <a rel="noreferrer" target="_blank">
              InnoVision
            </a>
          </p>
        </div>
        <div id="socialMedia">
          <a href={`/policy-privacy`}>Política de Privacidade</a>
          <a rel="noreferrer" href="https://www.instagram.com/" target="_blank">
            <FaInstagram />{" "}
          </a>
          <a rel="noreferrer" href="https://www.facebook.com/" target="_blank">
            <FaFacebookSquare />{" "}
          </a>
          <button
            onClick={scrollToTop}
            style={{ display: visible ? "inline" : "none" }}
            title="Voltar ao topo"
          >
            <FaArrowUp />
            {/*<span>Voltar ao topo</span>*/}
          </button>
        </div>
      </section>
    </StyledFooter>
  );
};
export default Footer;
