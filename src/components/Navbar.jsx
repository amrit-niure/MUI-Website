import styled from '@emotion/styled'
import { Api, Mail, Notifications } from '@mui/icons-material'
import { AppBar, Avatar, Badge, Box, Container, InputBase, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'


const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between'
})

const Search = styled("div")(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0px 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%'

}))

const UserBox = styled(Box) (({theme})=>({
display: 'flex',
gap: '10px',
alignItems:'center',
[theme.breakpoints.up("sm")]:{
  display:'none'
}
}))
const Icons = styled(Box)(({ theme }) => ({
display: 'none',
gap: '20px',
alignItems:'center',
[theme.breakpoints.up("sm")]:{
  display:'flex'
}
}))

const Navbar = () => {
  const [open,setOpen] = useState(false)
  return (
    <AppBar position='sticky'>
      <Container>

      <StyledToolbar>
        <Typography variant='h6' sx={{ display: { xs: "none", sm: 'block' } }}>
          AMRIT
        </Typography>
        <Api sx={{ display: { xs: "block", sm: 'none' } }} />
        <Search><InputBase placeholder='Search' color='black' width={'100%'}/></Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail color="white" />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications color="white" />
          </Badge>
          <Avatar alt="gfd " sx={{width:30, height: 30}} src="https://source.unsplash.com/featured/300x201" onClick={()=> setOpen(true)} />
        </Icons>
        <UserBox>
        <Typography> Niure </Typography>


        <Avatar alt="gfd " sx={{width:30, height: 30}} src="https://source.unsplash.com/featured/300x201" onClick={()=> setOpen(true)}/>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"

        open={open}
        onClose={()=> setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>

        </UserBox>
      </StyledToolbar>
        </Container>
    </AppBar>
  )
}

export default Navbar
