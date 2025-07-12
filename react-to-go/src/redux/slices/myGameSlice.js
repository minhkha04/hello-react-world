import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    xiNgau: {
        xiNgau1: 1,
        xiNgau2: 1,
        xiNgau3: 1,
    },
    totalPoints: 0,
    totalGame: 0,
    userChoice: "Xỉu",
    resultGame: "Chưa chơi",
}

const myGameSlice = createSlice({
    name: 'myGame',
    initialState,
    reducers: {
        updateUserChoice: (state, action) => {
            state.userChoice = action.payload;
        },
        resultGame: (state) => {
            let xiNgau1 = Math.floor(Math.random() * 6) + 1;
            let xiNgau2 = Math.floor(Math.random() * 6) + 1;
            let xiNgau3 = Math.floor(Math.random() * 6) + 1;
            state.xiNgau = {
                xiNgau1,
                xiNgau2,
                xiNgau3,
            }
            state.totalGame += 1;
            let result = xiNgau1 + xiNgau2 + xiNgau3 >= 11 ? "Tài" : "Xỉu";
            state.resultGame = result;
            if (result === state.userChoice) {
                state.totalPoints += 1;
            }
        }
    }
})

export const {updateUserChoice, resultGame} = myGameSlice.actions
export default myGameSlice.reducer
