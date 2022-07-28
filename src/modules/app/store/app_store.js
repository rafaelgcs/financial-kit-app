import { createSlice } from '@reduxjs/toolkit';

const THEME_KEY = process.env.REACT_APP_MODULE_APP_THEME_KEY;

export const app_slice = createSlice({
    name: 'app',
    initialState: {
        theme: localStorage.getItem(THEME_KEY),
    },
    reducers: {
        toggleThemeMode: (state) => {
            state.theme = state.theme == 'dark' ? 'light' : 'dark';
            localStorage.setItem(THEME_KEY, state.theme);
        },
    },
})

export const { toggleThemeMode } = app_slice.actions

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = (amount) => (dispatch) => {
//     setTimeout(() => {
//         dispatch(incrementByAmount(amount))
//     }, 1000)
// }

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const getTheme = (state) => {

    return state.app.theme;
}

export default app_slice.reducer
