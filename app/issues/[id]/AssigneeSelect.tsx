"use client";

import { Select } from "@radix-ui/themes";
import React from "react";

export default function AssigneeSelect() {
  return (
    <Select.Root>
      <Select.Trigger placeholder="Assign..." />

      <Select.Content>
        <Select.Group>
          <Select.Label>Suggestions</Select.Label>
          <Select.Item value="1">TEST</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
}