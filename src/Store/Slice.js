import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit";
import { GetData, urls } from "api/data/FetchData";

export const getDataAsync = createAsyncThunk("manager/getDataAsync", async () => {
   let result = [];
   
    GetData(urls.products).then(data => {
        result = data
    }).catch((err) => {console.log("error => ", err)});
    return result
})
const managerSlice = createSlice({
    name:"manager",
    initialState:{
        data:[],
       
    },
    reducers:{
        setDataR:(state, action) => {
            state.data = action.payload
        }
    },
    extraReducers:(builder) => {
        builder.addCase(getDataAsync.fulfilled, (state, action) => {
            state.data.push(action.payload)
        })
    }
});
export const {setDataR} = managerSlice.actions
export default managerSlice.reducer;
