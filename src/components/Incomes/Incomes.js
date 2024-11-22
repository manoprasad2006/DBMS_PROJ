import React, { useEffect } from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/layout";
import { useGlobalContext} from "../../context/globalContext";
import Form from "../Form/Form";
import IncomeItem from "../IncomeItem/IncomeItem";




function Income() {
    const {addIncome, incomes, getIncomes, deleteIncome, TotalIncome} = useGlobalContext()

    useEffect(() => {
        getIncomes()
    },[])

    return (
        <IncomeStyled>
            <InnerLayout>
                <h1>Incomes</h1>
                <h2 className="total-income">Total Income: <span>${TotalIncome()}</span></h2>
                <div className="income-content">
                    <div className="form-container">
                        <Form />
                    </div>
                    <div className="incomes">
                        {incomes.map((income) => {
                            const {_id, title, amount, date, category, description, type} = income;
                            return <IncomeItem 
                            key={_id}
                            id = {_id}
                            title={title}
                            type = {type}
                            amount={amount} 
                            date={date} 
                            category={category}
                            description={description}
                            indicatorColor="var(--color-green)"
                            deleteItem={deleteIncome}
                            />
                        })}
                    </div>
                </div>

            </InnerLayout>
        </IncomeStyled>
    )
}

const IncomeStyled = styled.div`
display: flex;
overflow: auto;
.income-content {
    display: flex;
    gap: 2rem;
    .incomes {
        flex: 1;
    }
}
.total-income{
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
    span{
        font-size: 2.5rem;
        font-weight: 800;
        color: var(--color-green);
    }
}
    flex-direction: column;
    gap: 2rem;
    input, textarea, select{
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
        &::placeholder{
            color: rgba(34, 34, 96, 0.4);
        }
    }
    .input-control{
        input{
            width: 100%;
        }
    }
    .selects{
        display: flex;
        justify-content: flex-end;
        select{
            color: rgba(34, 34, 96, 0.4);
            &:focus, &:active{
                color: rgba(34, 34, 96, 1);
            }
        }   
        .submit-btn{
            button{
                box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                &:hover{
                    background: var(--color-green) !important;
                }
            }
        }
`;

export default Income;