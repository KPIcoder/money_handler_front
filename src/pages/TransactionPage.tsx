import {
  Button,
  Card,
  CardHeader,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { useGetTransactionsQuery } from "../redux/api/api";
import AddTransactionForm from "../components/transaction/AddTransactionForm";

function TransactionPage() {
  const { data } = useGetTransactionsQuery();

  return (
    <Container sx={{ p: 3 }}>
      <Card sx={{ p: 3 }}>
        <AddTransactionForm />

        <Divider />

        <CardHeader title={"Transactions"} />
        {data &&
          data.data.map((transaction) => (
            <Stack key={transaction.id} spacing={3} direction={"row"} mt={1}>
              <Typography>
                Type: {transaction.transaction_type} Date:{" "}
                {transaction.transaction_date} Amount: {transaction.amount}
              </Typography>

              <Button variant="outlined">Delete</Button>
              <Button variant="outlined">Update</Button>
            </Stack>
          ))}
      </Card>
    </Container>
  );
}

export default TransactionPage;
