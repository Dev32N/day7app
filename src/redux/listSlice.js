import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    students:[
        {id:1,name:"Mèo Béo",checked:true,sex:"male"},
        {id:2,name:"Mèo Gầy",checked:false,sex:"female"},
        {id:3,name:"Mèo Cam",checked:true,sex:"male"},
        {id:4,name:"Mèo Ú",checked:false,sex:"male"}
    ],
    checkAll: false
}
const listSlice = createSlice({
    name:"students",
    initialState,
    reducers:{
        addStudent(state,action){
            state.students=[...state.students,{id:5,name:action.payload,checked:true,sex:"female"}]
        },
        deleteStudent(state,action){
            state.students=state.students.filter(item=>item.id !==action.payload)
        }
    }
})

export const {addStudent,deleteStudent} = listSlice.actions
export default listSlice.reducer