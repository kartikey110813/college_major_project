import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { auth} from "../Firebase";

// function ProtectedRoutes({ children, ...rest }) {
//   const user = auth.currentUser;
//   return (
//       <Routes>
//     <Route
//       {...rest}
//       render={({ location }) => {
//         if (user) {
//           return children;
//         } else {
//           if(!localStorage.getItem('user')){
//           return (
//             <Navigate to={{ pathname: "/", state: { from: location } }} />
//           )
//           } else{
//             return children
//           }
//         }
//       }}
//     />
//     </Routes>
//   );
// }

const ProtectedRoutes = () => {
const user = auth.currentUser;

return user ?<Outlet/> :<Navigate to ="/" />

}

export default ProtectedRoutes;
