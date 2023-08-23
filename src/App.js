import Quiz from "./modules/components/quiz";
import Mainpage from "./modules/page/Mainpage";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Result from "./modules/components/result";
import { CheckUserExist } from "./helper/helper";

//react routes
const router= createBrowserRouter([
 {
   path: '/',
   element : <Mainpage></Mainpage>
 },
 {
  path:'/quiz',
  element: <CheckUserExist><Quiz></Quiz></CheckUserExist>
 },
 {
  path:'/result',
  element:<CheckUserExist><Result></Result></CheckUserExist>
 }
])



function App() {
  return (
    <RouterProvider router={router}/>
    
  );
}

export default App;
