import "./ToDos.scss";
import Searchbar from "../components/filter-bar/Searchbar";
import PlusButton from "../components/filter-bar/PlusButton";
import Card from "../components/card/Card";

export default function ToDos() {
    return (
        <div className = "todos">
            <div className = "filter-bar">
                <Searchbar />
                <PlusButton onClick = {() => console.log("clicked")}/>
            </div>
            <div>
                <Card title="Title"/>
            </div>
        </div>
    );
}
