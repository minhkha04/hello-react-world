import {createSlice, current} from '@reduxjs/toolkit'

const initialState = {
    fullName: 'Update Your Name In Demo Redux',
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateFullName: (state, action) => {
            state.fullName = action.payload
        },
    }
})

export const {updateFullName} = userSlice.actions
export default userSlice.reducer
