import React from 'react';
import styled from 'styled-components';
import IncomeItem from '../IncomeItem/IncomeItem';

const ExpenseItemStyled = styled(IncomeItem)`
  color: red;
`;

const ExpenseItem = (props) => {
  return <ExpenseItemStyled type="expense" {...props} />;
};

export default ExpenseItem;