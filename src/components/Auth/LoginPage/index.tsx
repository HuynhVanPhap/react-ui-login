import { Button, Input, Title } from '@components/common';
import { Link } from "react-router-dom";
import './styles.scss';

export const LoginPage = () => {
    return (
        <div className="login">
            <div className="login__title">
                <Title 
                    title="Welcome to Login Page! 👋🏻"
                    subTitle="Please sign-in to your account and start the adventure"
                />
            </div>

            <div className="login__form">
                <form>
                    <div className="login__form-input">
                        <Input
                            type="text"
                            placeholder="Email"
                            name="email"
                        />
                    </div>

                    <div className="login__form-input">
                        <Input
                            type="password"
                            placeholder="Password"
                            name="password"
                        />
                    </div>

                    <div className="login__form-button">
                        <Button
                            type="submit"
                            name="submit"
                            label="Login"
                        />
                    </div>
                </form>

                <div className="login__form-divider">
                    <span>Or</span>
                </div>

                <div className="login__form-guest">
                    <span>
                        <Link to="/signup">Create New Account ?</Link>
                    </span>
                </div>
            </div>
        </div>
    );
}