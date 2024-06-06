import { createSlice } from '@reduxjs/toolkit'


export const todoSlice = createSlice({
  name: 'todoSlice',
  initialState:
  {
    editTitle:"",
    editEmail:"",
    editCity:"",
    editPhone:"",
    editImg:"",
    idx: null,
    data:[
        {
          id: 1,
          img:"./src/assets/user 1.webp",
          title: "maga",
          email:"ehson@gmail.com",
          city:"Kulob",
          phone:"000601953",
          status:true
        },
        {
          id: 2,
          img:"./src/assets/user3.webp",
          title: "Ehson",
          email:"ehson@gmail.com",
          city:"Khujand",
          phone:"000601953",
          status:false
        },
        {
          id: 3,
          img:"./src/assets/user2.webp",
          title: "Ehson",
          email:"ehson@gmail.com",
          city:"Dushanbe",
          phone:"000601953",
          status:false
        }
      ]
  },
  reducers:
  {
    editUser: (state) =>
    {
    state.data.filter(el=>
      {
        if(el.id == state.idx)
        {
          el.title = state.editTitle
          el.email = state.editEmail
          el.city = state.editCity
          el.phone = state.editPhone
          el.img = state.editImg
        }
      })

    // setOpens(false)
    // setTitle("")
    // setEmail("")
    // setCity("")
    // setPhone("")
    },
    setEditObj:(state , action) =>
    {
        console.log(action.payload);
        state.editTitle = action.payload.title,
        state.editEmail = action.payload.email,
        state.editCity = action.payload.city,
        state.editPhone = action.payload.phone,
        state.editImg = action.payload.img
        state.idx = action.payload.idx
    },
    setEditTitle:(state , action) =>
    {
        state.editTitle = action.payload
    },
    setEditEmail:(state , action) =>
    {
        state.editEmail = action.payload
    },
    setEditCity:(state , action) =>
    {
        state.editCity = action.payload
    },
    setEditPhone:(state , action) =>
    {
        state.editPhone = action.payload
    }
  },
})

export const { editUser, setEditObj , setEditTitle , setEditEmail , setEditCity , setEditPhone } = todoSlice.actions

export default todoSlice.reducer