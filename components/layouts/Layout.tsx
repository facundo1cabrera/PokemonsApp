import { ReactNode } from "react";
import Head from "next/head";

import { NavBar } from "../ui";

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout = ({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}): JSX.Element => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Facundo Cabrera" />
        <meta name="description" content="Información sobre el pokémon XXXXX" />
        <meta name="keywords" content="XXXXX, pokemon, pokedex" />

        <meta
          property="og:title"
          content="Pokemons App "
        />
        <meta
          property="og:description"
          content="Enjoy nevigating around pokemos!"
        />
        <meta
          property="og:image"
          content={`${origin}/img/banner.png`}
        />
      </Head>

      <NavBar />

      <main>{children}</main>
    </>
  );
};
