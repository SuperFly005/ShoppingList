import logo from './logo.svg';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import shoppingReducer from './redux/shoppingReducer';
import './App.css';
import ShoppingList from './pages/ShoppingList';

const store = createStore(shoppingReducer)

function App() {
  return (
    <Provider store={store}>
      <ShoppingList />
    </Provider>
  );
}

export default App;
