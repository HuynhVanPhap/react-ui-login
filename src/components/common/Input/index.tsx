import { PropsForm } from '@types';
// import { FC } from 'react';
import './styles.scss';

type Props = PropsForm & {
    type: 'text' | 'password'
}

export const Input = (props: Props) => {
    return (
        <div className="input-wrapper">
            <input
                type={props.type}
                className="input-entity"
                name={props.name}
                placeholder={props.placeholder}
            />
            {/* <span className="focus-border">
                <i></i>
            </span> */}
            <span className="focus-bg"></span>
        </div>
    );
}