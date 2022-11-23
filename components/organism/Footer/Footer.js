import React from "react";
import { ContainerHeader } from "./Footer.styles";

import { Link } from "components/molecules";

const Footer = () => {
  return (
    <ContainerHeader>
      <Link
        type="a"
        href="https://github.com/jsusvalle/challenge_skydropx"
        textAlign="center"
      >
        Jesus Valle - Repositorio Github
      </Link>
    </ContainerHeader>
  );
};

export default Footer;
