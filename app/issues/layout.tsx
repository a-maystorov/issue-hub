import { Box } from "@radix-ui/themes";
import React from "react";
import IssueActions from "./IssueActions";

export default function IssuesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box>
      <IssueActions />
      {children}
    </Box>
  );
}
