import React from 'react';
import { connect } from 'react-redux';
import { defaultCipherList } from 'constants';

const ExpenseList = (props) => (
    <div>
        <h1>EXPENSE LIST</h1>
        { props.expenses.length }
        { props.filters.text }
    </div>
);

const mapStatetoProps = (state) => {
    return {
        expenses: state.expenses,
        filters: state.filters
    };
};

export default connect(mapStatetoProps)(ExpenseList);
