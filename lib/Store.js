import Cookies from 'js-cookie';
import { createContext, useReducer } from 'react';

export const Store = createContext();

const initialState = {
  darkMode: Cookies.get('darkMode') === 'ON' ? true : false,
  board: {
    boardItems: Cookies.get('boardItems')
      ? JSON.parse(Cookies.get('boardItems'))
      : [],
    shippingAddress: Cookies.get('shippingAddress')
      ? JSON.parse(Cookies.get('shippingAddress'))
      : {},
    paymentMethod: Cookies.get('paymentMethod')
      ? Cookies.get('paymentMethod')
      : '',
  },
  userInfo: Cookies.get('userInfo')
    ? JSON.parse(Cookies.get('userInfo'))
    : null,

   adminInfo: Cookies.get('adminInfo')
    ? JSON.parse(Cookies.get('adminInfo'))
    : null,
};

function reducer(state, action) {
  switch (action.type) {
    case 'DARK_MODE_ON':
      return { ...state, darkMode: true };
    case 'DARK_MODE_OFF':
      return { ...state, darkMode: false };
    case 'BOARD_ADD_ITEM': {
      const newItem = action.payload;
      const existItem = state.board.boardItems.find(
        (item) => item._key === newItem._key
      );
      const boardItems = existItem
        ? state.board.boardItems.map((item) =>
            item._key === existItem._key ? newItem : item
          )
        : [...state.board.boardItems, newItem];
      Cookies.set('boardItems', JSON.stringify(boardItems));
      return { ...state, board: { ...state.board, boardItems } };
    }
    case 'BOARD_REMOVE_ITEM': {
      const boardItems = state.board.boardItems.filter(
        (item) => item._key !== action.payload._key
      );
      Cookies.set('boardItems', JSON.stringify(boardItems));
      return { ...state, board: { ...state.board, boardItems } };
    }
    case 'BOARD_CLEAR':
      return { ...state, board: { ...state.cart, boardItems: [] } };

    case 'USER_LOGIN':
      return { ...state, userInfo: action.payload };
    case 'ADMIN_LOGIN':
      return { ...state, adminInfo: action.payload };
    case 'USER_LOGOUT':
      return {
        ...state,
        userInfo: null,
        board: {
          boardItems: [],
          shippingAddress: {},
        },
      };
      case 'ADMIN_LOGOUT':
      return {
        ...state,
        adminInfo: null,
        board: {
          boardItems: [],
          shippingAddress: {},
        },
      };
    case 'SAVE_SHIPPING_ADDRESS':
      return {
        ...state,
        board: {
          ...state.board,
          shippingAddress: action.payload,
        },
      };
    case 'SAVE_PAYMENT_METHOD':
      return {
        ...state,
        board: {
          ...state.board,
          paymentMethod: action.payload,
        },
      };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
