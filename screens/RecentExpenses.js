import { useContext, useEffect, useState } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";
import { fetchExpenses } from "../util/http";
import LoadingOverLay from "../components/UI/LoadingOverLay";
import ErrorOverLay from "../components/UI/ErrorOverLay";

function RecentExpenses() {
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState();

  const expensesCtx = useContext(ExpensesContext);

  useEffect(() => {
    async function getExpenses() {
      setIsFetching(true)
      try {
        const expenses = await fetchExpenses();
        expensesCtx.setExpenses(expenses);
      } catch(error) {
        setError('Could not fetch expenses!');
      }

      setIsFetching(false)
    }

    getExpenses();
  }, [])

  function errorHandler() {
    setError(null)
  }

  if(error && !isFetching) {
    return <ErrorOverLay message={error} onConfirm={errorHandler} /> 
  }

  if(isFetching) {
    return <LoadingOverLay />
  }

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return (Date.parse(expense.date) > Date.parse(date7DaysAgo)) && (Date.parse(expense.date) <= Date.parse(today));
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 Days"
      fallbackText="No expenses registered for the last 7 days."
    />
  );
}

export default RecentExpenses;
