export interface WalletBalance {
  currency: string;
  amount: number;
  blockchain: string; // Thêm blockchain vào WalletBalance
}

export interface FormattedWalletBalance extends WalletBalance {
  // FormattedWalletBalance kế thừa WalletBalance
  formatted: string;
}

export interface PriceData {
  [currency: string]: number;
}

export interface Props extends BoxProps {}