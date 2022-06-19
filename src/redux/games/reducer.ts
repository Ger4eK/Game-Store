import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GameType } from '../../App';

interface gameSliceState {
  currentGame: GameType | null;
}

const initialState: gameSliceState = {
  currentGame: null,
};

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    setCurrentGame: (state, action: PayloadAction<GameType>) => {
      state.currentGame = action.payload;
    },
  },
});

export const { setCurrentGame } = gamesSlice.actions;
export default gamesSlice.reducer;
