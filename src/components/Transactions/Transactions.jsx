import css from 'components/Transactions/Transactions.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th className={css.header}>Type</th>
          <th className={css.header}>Amount</th>
          <th className={css.header}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr className={css.row} key={item.id}>
            <td className={css.value}>{item.type}</td>
            <td className={css.value}>{item.amount}</td>
            <td className={css.value}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
