import './App.css';
import Header from "./components/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/login/Login";
import Stock from "./components/manager/stock/Stock";
import StockCreator from "./components/manager/stock/StockCreator";
import StockEditor from "./components/manager/stock/StockEditor";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <Routes>
                    <Route path={"/login"} element={<Login/>}></Route>
                    <Route path={"/stocks"} element={<Stock/>}></Route>
                    <Route path={"/stocks/add"} element={<StockCreator/>}></Route>
                    <Route path={"/stocks/edit/:id"} element={<StockEditor/>}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
