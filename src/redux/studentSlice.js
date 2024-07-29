import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    student:{
        name: "Mèo Béo TQ",
        age: 18,
        math: 8,
        pro: 9,
        avg: 0
    },
    checked: false
}
const studentSlice = createSlice({
    name:"student",
    initialState,
    reducers:{
        changeAVG(state){
            state.student.avg=(state.student.math + state.student.pro)/2
        },
        reChecked(state){
            state.checked = !state.checked
        }
    }
})
export const {changeAVG,reChecked} = studentSlice.actions
export default studentSlice.reducer