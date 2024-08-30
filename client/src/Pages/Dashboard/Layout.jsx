// import React from 'react';
// import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
// import { useNavigate } from 'react-router-dom';
// import { Calendar } from 'react-big-calendar';

// const Layout = ({ children }) => {
//   const [open, setOpen] = React.useState(false);
//   const navigate = useNavigate();

//   const toggleDrawer = (newOpen) => () => {
//     setOpen(newOpen);
//   };
//   const handleNavigation = (path) => {
//     navigate(path);
//     setOpen(false);
//   };

//   const DrawerList = (
//     <List>
//       {['Inbox', 'Products', 'Coachs', 'Events','Calendars'].map((text, index) => (
//         <ListItem key={text} disablePadding>
//           <ListItemButton onClick={() => handleNavigation(`/${text.toLowerCase()}`)}>
//             <ListItemIcon>
//               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//             </ListItemIcon>
//             <ListItemText primary={text} />
//           </ListItemButton>
//         </ListItem>
//       ))}
//     </List>
//   );

//   return (
//     <div>
//       <Button onClick={toggleDrawer(true)}>Dashboard</Button>
//       <Drawer open={open} onClose={toggleDrawer(false)}>
//         {DrawerList}
//         <Divider />
//       </Drawer>
//       <div>{children}</div>
//     </div>
//   );
// };

// export default Layout;
