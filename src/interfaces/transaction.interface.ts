export type Transaction = {
  id: number;
  user_id: number;
  category_id: number;
  amount: number;
  transaction_type: "expense" | "profit";
  transaction_date: string;
  description?: string;
};
