import { Box, AppBar, IconButton, Typography, Button, Toolbar } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import LinkApp from "../atoms/LinkApp";
import CreateProject from "./CreateProject";
import { useRouter } from "next/router";
import CreateTask from "./CreateTask";

const Navigation = () => {
  const router = useRouter();
  const { id } = router.query;

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
        <Box
          sx={{
            display: 'none',
            '@media (min-width:600px)': {
              display: 'flex',
            },

          }}
        >
          <Button color="inherit">
            <LinkApp href="/" color='white'>Home</LinkApp>
          </Button>
          <Button color="inherit">
            <LinkApp href="/dashboard" color='white'>Dashboard</LinkApp>
          </Button>
        </Box>
        {id ? <CreateTask productId={id}/> : <CreateProject />}
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Navigation