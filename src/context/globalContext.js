import React, {useContext, useState} from "react"
import axios from 'axios'


const BASE_URL = 'http://127.0.0.1:5001/api/v1/'

const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) => {
    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])
    const [error, setError] = useState(null)


    //incomes
    const addIncome = async (income) => {
        try {
            const response = await axios.post(`${BASE_URL}add-income`, income)
            if (response.data) {
                // Instead of making another API call, update the state directly
                setIncomes(prevIncomes => [...prevIncomes, response.data])
            }
            //getIncomes()
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred while adding income')
        }
    }

    const getIncomes = async () => {
        try {
            const response = await axios.get(`${BASE_URL}get-incomes`)
            setIncomes(response.data)
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred while fetching incomes')
        }
    }

    const deleteIncome = async (id) => {
        try {
            await axios.delete(`${BASE_URL}delete-income/${id}`)
            // Update state immediately after successful delete
            
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred while deleting income')
        }
        getIncomes()
    }

    const TotalIncome = () => {
        let totalIncome = 0;
        incomes.forEach((income) => {
            totalIncome += income.amount
        })
        return totalIncome;
    }
    console.log(TotalIncome());

    //expenses
    const addExpense = async (expense) => {
        try {
            const response = await axios.post(`${BASE_URL}add-expense`, {
                ...expense,
                type: 'expense'  // Explicitly add type
            })
            console.log('Expense Response:', response.data)  // Log full response
            
            if (response.data) {
                setExpenses(prevExpenses => [...prevExpenses, {
                    ...response.data, 
                    type: 'expense'  // Ensure type is set
                }])
            }
            getExpenses()
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred while adding expense')
        }
    }
    const getExpenses = async () => {
        try {
            const response = await axios.get(`${BASE_URL}get-expense`)
            setExpenses(response.data)
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred while fetching expenses')
        }
    }

    const deleteExpense = async (id) => {
        try {
            await axios.delete(`${BASE_URL}delete-expense/${id}`)
            // Update state immediately after successful delete
            
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred while deleting expense')
        }
        getExpenses()
    }

    const TotalExpense = () => {
        let totalExpense = 0;
        expenses.forEach((expense) => {
            totalExpense += expense.amount
        })
        return totalExpense;
    }
    console.log(TotalExpense());

    const TotalBalance = () => {
        return TotalIncome() - TotalExpense();
    }

    const TransactionHistory = () => {
        const history = [...incomes, ...expenses]
        history.sort((a,b) => {
            return new Date(b.createdAt) - new Date(a.createdAt)
        })

        return history.slice(0, 3)
    }



    return (
        <GlobalContext.Provider value={{
            addIncome,
            getIncomes,
            incomes,
            deleteIncome,
            TotalIncome,
            error, // Also expose error state if needed

            addExpense,
            getExpenses,
            expenses,
            deleteExpense,
            TotalExpense,
            TotalBalance,
            TransactionHistory,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}