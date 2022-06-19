import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GameType } from '../../App';

interface cartSliceStore {
  itemsInCart: GameType[];
}

const initialState: cartSliceStore = {
  itemsInCart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setItemInCart: (state, action: PayloadAction<GameType>) => {
      state.itemsInCart.push(action.payload);
    },
    //! filter бути йти по поточному state і видаляти ту гру(по id яке ми передаєм), на яку ми натиснули
    deleteItemFromCart: (state, action: PayloadAction<number>) => {
      state.itemsInCart = state.itemsInCart.filter(
        (game) => game.id !== action.payload
      );
    },
  },
});

export const { setItemInCart, deleteItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
