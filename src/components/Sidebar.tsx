import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import logo from "../../public/images/sysmiddle-logo.png";
import Menus from "./Menus";
import { IconMyProject, IconProject } from "./icons";
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

export default function ButtonAppBar() {
    const projetos = ["sysmiddle"];

    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box>
            <AppBar>
                <Toolbar>
                    <IconButton
                        size="large"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 3 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div className={`flex justify-center items-center w-56 mt-1`}>
                        <Image src={logo} alt="Logo sysmiddle" />
                    </div>
                    <div className={`flex flex-row-reverse w-screen`}>
                        <IconButton
                            size="medium"
                            onClick={handleMenu}
                            color="inherit"
                            sx={{ mr: 2 }}
                        >
                            <AccountCircle sx={{ width: 32, height: 32 }} />
                        </IconButton>
                        <Menu className="w-full"
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Usuarios</MenuItem>
                            <MenuItem onClick={handleClose}>Termos de Uso</MenuItem>
                            <MenuItem onClick={handleClose}>Sair</MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
            <div className={` h-full w-64 pt-20 text-white bg-gray-50 border-2`}>
                <ul className={`cursor-pointer hover:text-blue-500 hover:bg-gray-100 border-bottom mb-2`}>
                    <li className={`flex justify-start items-center p-2 mb-2 mr-5`}>
                        <div className={`flex`}>
                            {IconMyProject}
                            <span className={`flex items-center font-medium ml-4 text-black`}>
                                {projetos[0]}
                            </span>
                        </div>
                        <div className="ml-12">{IconProject}</div>
                    </li>
                </ul>
                <Menus />
            </div>
        </Box>
    );
}

// import Menu from "./Menus";
// import { IconFolder, IconMyProject, IconProject } from "./icons";

// export default function Sidebar() {
//     const projetos = ['sysmiddle']

//     return (
// <div className={` h-full w-64 pt-20 text-white bg-gray-50 border-2`}>
//     <ul className={`cursor-pointer hover:text-blue-500 hover:bg-gray-100 border-bottom mb-2`}>
//         <li className={`flex justify-start items-center p-2 mb-2 mr-5`}>
//             <div className={`flex`}>
//                 {IconMyProject}
//                 <span className={`flex items-center font-medium ml-4 text-black`}>{projetos[0]}</span>
//             </div>
//             <div className="ml-12">
//                 {IconProject}
//             </div>
//         </li>
//     </ul>
//     <Menu />
// </div>
//     )
// }
