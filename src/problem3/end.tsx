import { WalletBalance, FormattedWalletBalance, PriceData, Props } from './types/end.type';
import { getPriority } from './utils/getPriority';

const WalletPage: React.FC<Props> = ({ children, ...rest }) => {
  const balances: WalletBalance[] = useWalletBalances();
  const prices: PriceData = usePrices();

  // Xoá bỏ lhsPriority ko tồn tại và thay thế bằng balancePriority
  const sortedBalances = useMemo(() => {
    return balances
      .filter((balance) => {
        const balancePriority = getPriority(balance.blockchain);
        return balancePriority > -99 && balance.amount <= 0; // Kết hợp 2 điều kiện
      })
      .sort(
        // Thay lhs và rhs bằng prevBalance và nextBalance dễ hiểu hơn
        (prevBalance, nextBalance) =>
          // Rút gọn code
          getPriority(nextBalance.blockchain) - getPriority(prevBalance.blockchain)
      );
  }, [balances]);

  const formattedBalances: FormattedWalletBalance[] = sortedBalances.map(
    (balance: FormattedWalletBalance) => ({
      ...balance,
      formatted: balance.amount.toFixed(),
    })
  );

  return (
    <div {...rest}>
      {/* Dùng formattedBalances thay vì sortedBalances */}
      {formattedBalances.map((balance) => (
        <WalletRow
          // className={classes.row} xoá bỏ vì "classes" ko tồn tại
          key={balance.currency} // Dùng currency thay vì index
          amount={balance.amount}
          usdValue={prices[balance.currency] * balance.amount}
          formattedAmount={balance.formatted}
        />
      ))}
    </div>
  );
};

export default WalletPage

// Giả sử các custom hooks với TypeScript tại file khác
function useWalletBalances(): WalletBalance[] {
  // Logic của bạn để lấy balances
  return [];
}

function usePrices(): PriceData {
  // Logic của bạn để lấy prices
  return {};
}