import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getVisibleExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
    <div>
        <h1>EXPENSE LIST</h1>
        { props.expenses.map((expense) => (
            <ExpenseListItem key={expense.id} {...expense} />
        ))}
        
    </div>
);

const mapStatetoProps = (state) => {
    return {
        expenses: getVisibleExpenses(state.expenses, state.filters),
    };
};

export default connect(mapStatetoProps)(ExpenseList);
