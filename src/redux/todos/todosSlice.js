import { createSlice, nanoid } from "@reduxjs/toolkit";

const todosSlice = createSlice({
    name:"todos",
    initialState: {
        items:[{
            id:"1",
            title:"Learn React",
            completed:true,
        },
        {
            id:"2",
            title:"Learn Redux",
            completed:false,
        }
    ],
    activeFilter:"all",
    },
    reducers:{
        addTodo: {
            reducer: (state,action) => {
            state.items.push(action.payload)
            },
            prepare : ({title}) => {
                return {
                    payload:{
                        id:nanoid(2),
                        completed:false,
                        title
                    }
                }
            }
        },
        toggle : (state,action) => {
            const id = action.payload;
            const item = state.items.find(item => item.id === id)
            item.completed = !item.completed
        },
        destroy : (state,action) =>{
            const id = action.payload;
            const newItems = state.items.filter(item => item.id !== id);
            state.items = newItems;
        },
        changeActiveFilter: (state,action) => {
            state.activeFilter = action.payload
        },
        clearCompleted: (state,action) =>{
            const allActive = state.items.filter(item => item.completed === false)
            state.items = allActive;
        }

    },
})

export const {addTodo,toggle,destroy,changeActiveFilter,clearCompleted} = todosSlice.actions;
export default todosSlice.reducer;