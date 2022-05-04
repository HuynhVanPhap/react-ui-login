import { LoginPage } from "@components/Auth/LoginPage";
import { SignUpPage } from "@components/Auth/SignUpPage";
import { NotFound } from "@components/NotFound";
import { Menu } from "@components/Menu";
import { 
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import App from '../App';
import { Success } from "@components/Success";

export const List = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} >
                    <Route path="/" element={<Menu />} />
                    <Route path="login" element={<LoginPage />} />
                    <Route path="signup" element={<SignUpPage />} />
                    <Route path="success" element={<Success />} />
                    {/* No Match Route => 404 Components */}
                    <Route
                        path="*"
                        element={<NotFound />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
