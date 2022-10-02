import "./Card.scss";
import PropTypes from "prop-types";
import OptionsBar from "./OptionsBar";

export default function Card(props) {
    return (
        <div className = "card">
            <div className = "card-title">{props.title}</div>
            <OptionsBar />
        </div>
    );
}

Card.propTypes = {
    title: PropTypes.string.isRequired
}