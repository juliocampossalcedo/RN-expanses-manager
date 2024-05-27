import axios from "axios";

const BACKEND_URL =
  "https://react-native-course-e444c-default-rtdb.firebaseio.com";

export function storeExpense(expenseData) {
  const response = axios.post(BACKEND_URL + "/expenses.json", expenseData);
  console.log("Response", expenseData);
  const id = expenseData.description;
  return id;
}

export async function fetchExpenses() {
  const response = await axios.get(BACKEND_URL + "/expenses.json");
  
  const expenses = [];

  for ( const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: response.data[key].date,
      description: response.data[key].description
    }
    expenses.push(expenseObj);
  }

  return expenses;
}

export function updateExpense(id, expenseData) {
  return axios.put(BACKEND_URL + `/expenses/${id}.json`, expenseData);
}

export function deleteExpense(id) {
  return axios.delete(BACKEND_URL + `/expenses/${id}.json`);
}