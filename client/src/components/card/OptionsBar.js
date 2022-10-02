import "./OptionsBar.scss";
import { faEllipsisVertical, faCompress } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function OptionsBar() {
    return (
        <div className = "options-bar">
            <FontAwesomeIcon className = "option card-collapse" icon = {faCompress} />
            <FontAwesomeIcon className = "option card-options" icon = {faEllipsisVertical} />
        </div>
    );
}