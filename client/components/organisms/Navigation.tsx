import { Box, AppBar, IconButton, Typography, Button, Toolbar } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import Link from "next/link";

const Navigation = () => {

  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
          <Link href="/">Home</Link>
        </Typography>
        <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
          <Link href="/dashboard">Dashboard</Link>
        </Typography>
        <Button color="inherit">Criar Projeto</Button>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Navigation