import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Streak.scss";

export default function Streak() {
    return (
        <div className = "streak">
            <FontAwesomeIcon className = "streak-icon" icon = {faFire}/>
            <FontAwesomeIcon className = "streak-icon" icon = {faFire}/>
            <FontAwesomeIcon className = "streak-icon" icon = {faFire}/>
            <FontAwesomeIcon className = "streak-icon" icon = {faFire}/>
            <FontAwesomeIcon className = "streak-icon" icon = {faFire}/>
            <FontAwesomeIcon className = "streak-icon" icon = {faFire}/>
            <FontAwesomeIcon className = "streak-icon" icon = {faFire}/>
        </div>
    );
}