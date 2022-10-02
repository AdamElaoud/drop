import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck, faLeaf, faCalendarDays, faUser } from "@fortawesome/free-solid-svg-icons";
import { faTrello } from "@fortawesome/free-brands-svg-icons";
import "./SidebarItem.scss";
import PropTypes from "prop-types";

SidebarItem.propTypes = {
    item: PropTypes.string.isRequired
}

export default function SidebarItem(props) {
    let icon, text;

    switch (props.item) {
        case "dashboard":
            icon = faTrello;
            text = "Dashboard";
            break;
        case "todos":
            icon = faListCheck;
            text = "To Dos";
            break;
        case "detox":
            icon = faLeaf;
            text = "Detox";
            break;
        case "calendar":
            icon = faCalendarDays;
            text = "Calendar";
            break;
        case "profile":
            icon = faUser;
            text = "Profile";
            break;
        default:
            throw new Error("invalid sidebaritem icon type!");
    }

    return (
        <div className = "sidebaritem">
            <FontAwesomeIcon className = "sidebaritem-icon" icon = {icon}/>
            <span className = "sidebaritem-text">{text}</span>
        </div>
    );
}
