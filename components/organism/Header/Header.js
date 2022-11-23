import React from "react";
import {
  ContainerHeader,
  Navbar,
  UnorderedList,
  ItemList,
} from "./Header.styles";

import { Link } from "components/molecules";

const navBarItems = [
  { name: "Cotizar", href: "/" },
  { name: "Envíos", href: "/labels" },
];

const Header = () => {
  return (
    <ContainerHeader>
      <Navbar>
        <Link href="/" type="a" color="blue" weight="black" size="xl">
          Skydropx
        </Link>

        <UnorderedList>
          {navBarItems.map((item) => (
            <ItemList key={item.name}>
              <Link
                href={item.href}
                type="a"
                size="md"
                color="grayDark"
                weight="medium"
                spacing={3}
              >
                {item.name}
              </Link>
            </ItemList>
          ))}
        </UnorderedList>
      </Navbar>
    </ContainerHeader>
  );
};

export default Header;
