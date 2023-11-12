import { Box, Button } from "@radix-ui/themes";
import Link from "next/link";

export default function IssueActions() {
  return (
    <Box className="mb-5">
      <Button>
        <Link href="/issues/new">New issue</Link>
      </Button>
    </Box>
  );
}
