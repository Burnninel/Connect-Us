import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

export default function Sidebar() {
    return (
        <ProSidebar >
            <Menu>
                <MenuItem >Dashboard</MenuItem>
                <SubMenu>
                    <MenuItem>Component 1</MenuItem>
                    <MenuItem>Component 2</MenuItem>
                </SubMenu>
            </Menu>   
        </ProSidebar>
    )
}