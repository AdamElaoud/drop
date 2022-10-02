import "./Sidebar.scss";
import SidebarItem from "./SidebarItem";
import Toggle from "./Toggle";

export default function Sidebar() {
    return (
        <div className = "sidebar">
            <SidebarItem item = "dashboard"/>
            <SidebarItem item = "todos"/>
            <SidebarItem item = "detox"/>
            <SidebarItem item = "calendar"/>
            <SidebarItem item = "profile"/>
            <Toggle />
        </div>
    );
}