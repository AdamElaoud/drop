import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import "./BasePage.scss";

export default function BasePage(props) {
    return (
        <>
            <Sidebar />
            <Header />
            <div className = "page-content">
                {props.children}
            </div>
        </>
    );
}