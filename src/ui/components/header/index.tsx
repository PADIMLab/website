import React, { useState, useEffect } from "react";
import { Grid, Button, Stack, Typography, AppBar, Toolbar, IconButton, Box, Drawer, ListItem, ListItemButton, Divider, List, ListItemText } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useLocation, useNavigate } from "react-router-dom";

const drawerWidth = 240;
const navItems = [{name:'Home', link: ''}, {name:'Quem Somos', link: './#QuemSomos'}, {name: 'Linha de Pesquisa', link:'./#LinhaPesquisa'}, {name: 'Equipe', link: './#Equipe'}, {name: 'Projetos', link: '/Projetos'}];

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [highlightedButton, setHighlightedButton] = useState<number>(0);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const buttonsMap = [
    { route: "/", index: 0 },
    { route: "/quemsomos", index: 1 },
    { route: "/linha", index: 2 },
    { route: "/equipe", index: 3 },
    { route: "/projetos", index: 3 },
  ];

  useEffect(() => {
    const matchedButton = buttonsMap.find(
      (item) => item.route === location.pathname
    );
    if (matchedButton) {
      setHighlightedButton(matchedButton.index);
    } else {
      if (location.pathname.includes("/equipe")) {
        setHighlightedButton(1);
      } else {
        setHighlightedButton(5);
      }
    }
  }, [location.pathname]);
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', backgroundColor: '#181B20', height: '100%' }}>
      <Stack direction="row" alignItems="center" pt={1}>
          <img src={"/logo.png"} alt="logo" width={100} />
          <Typography
            variant="h5"
            style={{ fontFamily: "Belezza, Arial, sans-serif" }}
          >
            <div>
              <span style={{ color: "white", marginRight: "2px" }}>P</span>
              <span style={{ color: "#F33F44", marginRight: "2px" }}>A</span>
              <span style={{ color: "#FFF", marginRight: "2px" }}>D</span>
              <span style={{ color: "#F33F44", marginRight: "2px" }}>I</span>
              <span style={{ color: "#FFF", marginRight: "2px" }}>M</span>
              <span style={{ color: "#F6BA19" }}>Lab</span>
            </div>
          </Typography>
        </Stack>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton sx={{ textAlign: 'center', color: '#F6BA19' }}>
              <Button href={item.link} sx={{ color: '#F6BA19' }}>{item.name}</Button>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
    <AppBar component="nav" sx={{backgroundColor: '#181B20'}} position="sticky" >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        >
          <Stack direction="row" alignItems="center">
            <img src={"/logo.png"} alt="logo" width={120} />
            <Typography
              variant="h5"
              style={{ fontFamily: "Belezza, Arial, sans-serif" }}
            >
              <div>
                <span style={{ fontFamily: 'Belezza', color: "white", marginRight: "2px" }}>P</span>
                <span style={{ fontFamily: 'Belezza', color: "#F33F44", marginRight: "2px" }}>A</span>
                <span style={{ fontFamily: 'Belezza', color: "#FFF", marginRight: "2px" }}>D</span>
                <span style={{ fontFamily: 'Belezza', color: "#F33F44", marginRight: "2px" }}>I</span>
                <span style={{ fontFamily: 'Belezza', color: "#FFF", marginRight: "2px" }}>M</span>
                <span style={{ fontFamily: 'Belezza', color: "#F6BA19" }}>Lab</span>
              </div>
            </Typography>
          </Stack>
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {navItems.map((item) => (
            <Button key={item.name} sx={{ color: '#F6BA19', fontFamily: 'Belezza' }} href={item.link}>
              {item.name}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  <nav>
    <Drawer
      //container={container}
      variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        display: { xs: 'block', sm: 'none' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
      }}
    >
      {drawer}
    </Drawer>
  </nav>

    </>
  );
};

export default Header;
