import PropTypes from 'prop-types';
import { Table, Thead, Th, Row } from "./TransactionHistory.styled"
export const TransactionHistory = ({transactions}) => {
    return <Table>
  <Thead>
    <tr>
      <Th>Type</Th>
      <Th>Amount</Th>
      <Th>Currency</Th>
    </tr>
  </Thead>

    <tbody>
        {transactions.map(({id, type, amount, currency}) => (
            <Row key={id}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
            </Row>
        ))}
  </tbody>
</Table>
}

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }),
    ),
};