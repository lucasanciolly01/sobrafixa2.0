export type TransactionType = "income" | "expense";
export type TransactionStatus = "Confirmado" | "Pendente" | "Agendado";

export interface Transaction {
  id: number;
  title: string;
  category: string;
  date: string;
  amount: number;
  type: TransactionType;
  status: TransactionStatus;
}

export interface Goal {
  id: number;
  title: string;
  current: number;
  target: number;
  deadline: string;
  iconName: string; // Ex: 'Plane', 'Car'
  color: string;
  barColor: string;
}

export interface BudgetCategory {
  id: number;
  name: string;
  spent: number;
  limit: number;
  color: string;
  bg: string;
}

export interface BankAccount {
  id: number;
  name: string;
  type: string;
  balance: number;
  color: string;
  lastSync: string;
}