import React, { useEffect } from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/layout";
import { useGlobalContext} from "../../context/globalContext";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import ExpenseForm from "./ExpenseForm";
import Income from "../Incomes/Incomes";




function Expense() {    
    const {addExpense, expenses, getExpenses, deleteExpense, TotalExpense} = useGlobalContext()

    useEffect(() => {
        getExpenses()
    },[getExpenses])

    return (
        <ExpenseStyled>
            <InnerLayout>
                <h1>Expenses</h1>
                <h2 className="total-Expense">Total Expense: <span>${TotalExpense()}</span></h2>
                <div className="income-content">
                    <div className="Expense-form">
                        <ExpenseForm />
                    </div>
                    <div className="incomes">
                        {expenses?.map((expense) => {
                            const {_id, title, amount, date, category, description, type} = expense;
                            return <ExpenseItem 

                            key={_id}
                            id = {_id}
                            title={title}
                            amount={amount} 
                            date={date} 
                            
                            category={category}
                            description={description}
                            type = 'expense'
                            indicatorColor="red"
                            deleteItem={deleteExpense}
                            />
                        })}
                    </div>
                </div>

            </InnerLayout>
        </ExpenseStyled>
    )
}

const ExpenseStyled = styled.div`
    display: flex;
    overflow: auto;
    padding: 2rem; /* Optional padding for spacing */

    .income-content {
        display: flex;
        gap: 2rem;
        width: 100%;
        
        .Expense-form {
            flex: 0.3; /* Form takes 30% of the available width */
            max-width: 400px;
            display: flex;
            flex-direction: column;
        }
        
        .incomes {
            flex: 0.7; /* Expenses list takes 70% of the available width */
            overflow-y: auto;
            max-height: 80vh; /* Set max height for the expenses list */
        }
    }

    .total-Expense {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        border-radius: 20px;
        padding: 1rem;
        margin: 1rem 0;
        font-size: 2rem;
        gap: .5rem;
        span {
            font-size: 2.5rem;
            font-weight: 800;
            color: var(--color-green);
        }
    }
    
    input, textarea, select {
        font-family: inherit;
        font-size: inherit;
        outline: none;
        border: none;
        padding: .5rem 1rem;
        border-radius: 5px;
        border: 2px solid #fff;
        background: transparent;
        resize: none;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        color: rgba(34, 34, 96, 0.9);
        &::placeholder {
            color: rgba(34, 34, 96, 0.4);
        }
    }

    .input-control {
        input {
            width: 100%;
        }
    }

    .selects {
        display: flex;
        justify-content: flex-end;
        select {
            color: rgba(34, 34, 96, 0.4);
            &:focus, &:active {
                color: rgba(34, 34, 96, 1);
            }
        }
        .submit-btn {
            button {
                box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                &:hover {
                    background: var(--color-green) !important;
                }
            }
        }
    }
`;

export default Expense;
