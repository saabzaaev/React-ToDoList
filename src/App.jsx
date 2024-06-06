import { useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import NorthIcon from '@mui/icons-material/North';
import { Button } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from "react-redux";
import { editUser, setEditCity, setEditEmail, setEditObj, setEditPhone, setEditTitle } from "./reducer/todoSlice";

function App() {
  const dispatch = useDispatch()

  const style =
  {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };    
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [age, setAge] = useState('');

  const [opens, setOpens] = useState(false);
  const handleOpens = () => setOpens(true);
  const handleCloses = () => setOpens(false);


  const handleChange = (event) => {
    setSelectCity(event.target.value);
  };
  const handleChanges = (event) => {
    setSelect(event.target.value);
  };

  const [title , setTitle] = useState("")
  const [email , setEmail] = useState("")
  const [city , setCity] = useState("")
  const [phone , setPhone] = useState("")
  // const [idx , setIdx] = useState(null)
  const [img , setImg] = useState("")

  const[search , setSearch] = useState("")
  const[select , setSelect] = useState("")
  const[selectCity , setSelectCity] = useState("")

  function deleteUser(id)
  {
    setData(data.filter(el =>
      {
        return el.id != id
      }))
  }

  function postUser()
  {
    let user = 
    {
      id: Date.now(),
      img:img,
      title: title,
      email:email,
      city:city,
      phone:phone,
      status:false
    }
    data.push(user)
    setData(data)
    setOpen(false)
    setTitle("")
    setEmail("")
    setCity("")
    setPhone("")
  }

  function isCompleade(id)
  {
    setData(data.filter(el =>
      {
        if(el.id == id)
        {
          el.status = !el.status
        }
        return el 
      }))
  }


  const data = useSelector(state => state.todoSlice.data)

  const editTitle = useSelector(state => state.todoSlice.editTitle)
  const editEmail = useSelector(state => state.todoSlice.editEmail)
  const editCity = useSelector(state => state.todoSlice.editCity)
  const editPhone = useSelector(state => state.todoSlice.editPhone)

  return (
    <>
    <header className="w-[92%] m-auto">

    <nav className="p-[20px] flex justify-between">
      <h1 className="text-[20px] font-bold">User List</h1>
      <section  className="flex gap-5">
        <Button variant="contained" onClick={handleOpen}>+ NEW</Button>
        <Button variant="outline" sx={{backgroundColor:"lightgray"}}>Light</Button>
        <Button variant="outline" sx={{border:"1px solid lightgray" , ml:"-20px"}}>Dark</Button>
      </section>
    </nav>

    <nav className="p-[0_20px_20px_10px] flex justify-between items-center">
      <aside className="flex gap-2">

      <FormControl size="small" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Status</InputLabel>
        <Select sx={{width:"130px"}}
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={select}
          label="Age"
          onChange={handleChanges}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={""}>All</MenuItem>
          <MenuItem value={true}>True</MenuItem>
          <MenuItem value={false}>False</MenuItem>
        </Select>
      </FormControl>

      <FormControl size="small" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">City</InputLabel>
        <Select sx={{width:"130px"}}
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={selectCity}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={""}>All</MenuItem>
          <MenuItem value={"Dushanbe"}>Dushanbe</MenuItem>
          <MenuItem value={"Kulob"}>Kulob</MenuItem>
          <MenuItem value={"Khujand"}>Khujand</MenuItem>
        </Select>
      </FormControl>
    
      </aside>
      <TextField value={search} onChange={(el) => setSearch(el.target.value)} size="small" sx={{width:"30%"}} label="Search"/>
    </nav>

    </header>

    <main>
      
    <TableContainer component={Paper} sx={{width:"90%" , margin:"auto"}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">

        <TableHead>
          <TableRow>
            <TableCell><PersonIcon/> Name</TableCell>
            <TableCell align="right"> <LockIcon fontSize="small"/> City </TableCell>
            <TableCell align="right"><AccessTimeFilledIcon fontSize="small"/> Status <NorthIcon fontSize="small"/></TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {
            data
            .filter(el =>
              {
                return el.status.toString().includes(select)
              })
            .filter(el =>
              {
                return el.city.toString().includes(selectCity)
              })
            .filter(el=>
              {
                return el.city.toLocaleLowerCase().trim().includes(search)
              })
            .map((el , i) =>
            (
              <TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                <div className="flex gap-2"><img className="w-[40px] h-[40px] rounded-[50%]" src={el.img}/><div className="flex flex-col"><p>{el.title}</p><p className="text-gray-400 text-[12px]">{el.email}</p></div></div>
                </TableCell>
                <TableCell align="right">{el.city}</TableCell>
                <TableCell align="right"><Button variant="contained" sx={{backgroundColor:el.status?"green":"red"}} >{el.status ? 'Online': 'Offline'}</Button></TableCell>
                <TableCell align="right">{el.phone}</TableCell>
                <TableCell align="right"><Button variant="contained" onClick={()=> {handleOpens(), dispatch(setEditObj({idx:el.id ,title:el.title , email:el.email , city:el.city , phone:el.phone , img:el.img }))} }>EDIT</Button> <Button variant="contained" color="error" onClick={() => deleteUser(el.id)}>DELETE</Button> <Checkbox checked={el.status} onClick={()=> isCompleade(el.id)} {...label} /></TableCell>
              </TableRow>
            ))
          }
        </TableBody>

      </Table>
    </TableContainer>

    </main>

    {/* addModal */}
    <Modal
    sx={{backdropFilter:"blur(10px)"}}  
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style} className="flex flex-col gap-2 rounded-lg">
              <TextField value={img} onChange={(el) => setImg(el.target.value)} size="small" sx={{width:"100%"}} label="Image"/>
              <TextField value={title} onChange={(el) => setTitle(el.target.value)} size="small" sx={{width:"100%"}} label="Title"/>
              <TextField value={email} onChange={(el) => setEmail(el.target.value)} size="small" sx={{width:"100%"}} label="Email"/>
              <TextField value={city} onChange={(el) => setCity(el.target.value)} size="small" sx={{width:"100%"}} label="City"/>
              <TextField value={phone} onChange={(el) => setPhone(el.target.value)} size="small" sx={{width:"100%"}} label="Phone"/>
              <Button variant="contained" onClick={()=> postUser()}>Save</Button>
          </Box>
        </Fade>
    </Modal>

    {/* editModa */}
    <Modal
    sx={{backdropFilter:"blur(10px)"}}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={opens}
        onClose={handleCloses}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={opens}>
          <Box sx={style} className="flex flex-col gap-5 rounded-xl">
              {/* <TextField value={img} onChange={(el) => setImg(el.target.value)} size="small" sx={{width:"100%"}} label="Title"/> */}
              <TextField value={editTitle} onChange={(el) => dispatch(setEditTitle(el.target.value))} size="small" sx={{width:"100%"}} label="Title"/>
              <TextField value={editEmail} onChange={(el) => dispatch(setEditEmail(el.target.value))} size="small" sx={{width:"100%"}} label="Email"/>
              <TextField value={editCity} onChange={(el) => dispatch(setEditCity(el.target.value))} size="small" sx={{width:"100%"}} label="City"/>
              <TextField value={editPhone} onChange={(el) => dispatch(setEditPhone(el.target.value))} size="small" sx={{width:"100%"}} label="Phone"/>
              <Button variant="contained" onClick={()=> {dispatch(editUser()) , handleCloses()}}>Save</Button>
          </Box>
        </Fade>
    </Modal>
    
    </>
  );
}

export default App;
