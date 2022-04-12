import { Link, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";
import NextLink from "next/link";

export const NavBar = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0x 50px",
        backgroundColor: theme?.colors.gray900.value,
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        alt="icono"
        width={70}
        height={70}
      />

      <NextLink href="/" passHref>
        <Link css={{ marginRight: "10px" }}>
          <Text color="white" h2>
            P
          </Text>
          <Text color="white" h3>
            okemon
          </Text>{" "}
        </Link>
      </NextLink>

      <NextLink href="/favorites" passHref>
        <Link css={{ marginRight: "10px" }}>
          <Text color="white">Favoritos</Text>
        </Link>
      </NextLink>
    </div>
  );
};
