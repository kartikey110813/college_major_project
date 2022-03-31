import ReactDom from "react-dom";
import { AuthProvider } from "./AuthProvider";
import Routes from "./Router/ReactRouter";

ReactDom.render(
    <AuthProvider>
    <Routes />
    </AuthProvider>
    
    , document.getElementById("root"));
