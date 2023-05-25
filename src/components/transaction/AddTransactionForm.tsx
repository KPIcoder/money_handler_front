import {
  Box,
  Checkbox,
  Radio,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const categories = ["Groceries", "Eating Out", "Salary", "Entertainment"];

export default function AddTransactionForm() {
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  return (
    <>
      <Typography variant="h4">Add Transaction</Typography>
      <Stack spacing={2}>
        <TextField
          sx={{ maxWidth: 350 }}
          value={amount}
          type="number"
          onChange={(e) => setAmount(Number(e.target.value))}
          label={"Amount"}
        />

        <TextField
          sx={{ maxWidth: 350 }}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          label={"Category"}
        />

        <TextField
          sx={{ maxWidth: 350 }}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          label={"Description"}
          required={false}
        />
      </Stack>
      Expense:
      <Radio value={"expense"} />
      Profit:
      <Radio value={"expense"} />
    </>
  );
}
