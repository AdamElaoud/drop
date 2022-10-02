import "./PlusButton.scss";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

export default function PlusButton(props) {
    return (
        <button className = "round-button" onClick = {props.onClick}>
            <FontAwesomeIcon icon = {faPlus} />
        </button>
    );
}

PlusButton.propTypes = {
    onClick: PropTypes.func.isRequired
}