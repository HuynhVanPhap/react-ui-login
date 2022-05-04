import { Button, Input, Title } from '@components/common';
import { Link } from "react-router-dom";
import './styles.scss';

export const SignUpPage = () => {
    return (
        <div className="signup">
                        <div className="signup__title">
                <Title 
                    title="Welcome to SignUp Page! 👋🏻"
                    subTitle="Create new adventure"
                />
            </div>

            <div className="signup__form">
                <form>
                    <div className="signup__form-input">
                        <Input
                            type="text"
                            placeholder="Email"
                            name="email"
                        />
                    </div>

                    <div className="signup__form-input">
                        <Input
                            type="password"
                            placeholder="Password"
                            name="password"
                        />
                    </div>

                    <div className="signup__form-input">
                        <Input
                            type="password"
                            placeholder="Password Verify"
                            name="password_verify"
                        />
                    </div>

                    <div className="signup__form-button">
                        <Button
                            type="submit"
                            name="submit"
                            label="Sign Up"
                        />
                    </div>
                </form>

                <div className="signup__form-divider">
                    <span>Or</span>
                </div>

                <div className="signup__form-guest">
                    <span>
                        <Link to="/login">Login</Link>
                    </span>
                </div>
            </div>
        </div>
    );
}