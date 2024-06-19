import Link from "next/link";

import React, { useState } from "react";

import { IoMenuOutline } from "react-icons/io5";
import Drawer from "@mui/material/Drawer";

import { HeaderComponent, Menu } from "../Header/styles";
import { ListUserResgistrations } from "@/Models/User";

interface Props {
  colorTheme: "light" | "blue";
  route: string;
  user: ListUserResgistrations | null;
}

const Header: React.FC<Props> = ({ colorTheme, route, user }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("user");
    if (typeof window !== "undefined") {
      window.location.href = "/login";
    }
  };

  return (
    <HeaderComponent colorTheme={colorTheme} route={route}>
      <section>
        <Link href="/">
          <h1 id="logo">Bot Salva-Vidas</h1>
        </Link>

        <button onClick={() => setMenuIsOpen(true)}>
          <IoMenuOutline />
        </button>
      </section>

      <Drawer
        anchor="right"
        open={menuIsOpen}
        onClose={() => setMenuIsOpen(false)}
      >
        <Menu colorTheme={colorTheme} route={route}>
          <div>
            <Link href="/">
              <li>HOME</li>
            </Link>
          </div>
          <div>
            <Link href="/about-us">
              <li>SOBRE NÓS</li>
            </Link>
          </div>
          <div>
            <Link href="/user-registration">
              <li>FAÇA PARTE</li>
            </Link>
          </div>
          {user && (
            <div>
              <Link href="/flood-registration">
                <li>CADASTRAR ÁREA ALAGADA</li>
              </Link>
            </div>
          )}
          {user && (user.adm || user.autoridade) && (
            <div>
              <Link href="/list-flood-registrations">
                <li>VISUALIZAR ÁREAS ALAGADAS</li>
              </Link>
            </div>
          )}
          {(!user || (!user.adm && !user.autoridade)) && (
            <div>
              <Link href="/list-confirmed-flood-registrations">
                <li>VISUALIZAR ÁREAS ALAGADAS</li>
              </Link>
            </div>
          )}
          {user && user.adm && (
            <div>
              <Link href="/list-user-registrations">
                <li>VISUALIZAR USUÁRIOS</li>
              </Link>
            </div>
          )}
          {user && (
            <div>
              <li onClick={handleLogout}>SAIR</li>
            </div>
          )}
        </Menu>
      </Drawer>
    </HeaderComponent>
  );
};

export default Header;
