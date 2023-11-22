"use client";

import { Avatar, Container, DropdownMenu, Flex, Text } from "@radix-ui/themes";
import classNames from "classnames";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillBug } from "react-icons/ai";

function AuthStatus() {
  const { status, data: session } = useSession();

  if (status === "loading") {
    return null;
  }

  if (status === "unauthenticated") {
    return (
      <Link href="/api/auth/signin" className="nav-link">
        Login
      </Link>
    );
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Avatar
          src={session!.user?.image!}
          fallback="?"
          size="2"
          radius="full"
          className="cursor-pointer"
          referrerPolicy="no-referrer"
        />
      </DropdownMenu.Trigger>

      <DropdownMenu.Content>
        <DropdownMenu.Label>
          <Text size="2">{session!.user?.email}</Text>
        </DropdownMenu.Label>

        <DropdownMenu.Item>
          <Link href="/api/auth/signout" className="nav-link">
            Logout
          </Link>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}

function NavLinks() {
  const currentPath = usePathname();
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];

  return (
    <ul className="flex space-x-6">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className={classNames({
              "nav-link": true,
              "!text-zinc-900": link.href === currentPath,
            })}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function NavBar() {
  return (
    <nav className=" border-b mb-5 px-5 py-3">
      <Container>
        <Flex justify="between">
          <Flex align="center" gap="3">
            <Link href="/">
              <AiFillBug />
            </Link>

            <NavLinks />
          </Flex>

          <AuthStatus />
        </Flex>
      </Container>
    </nav>
  );
}
