import { PropsForm } from '@types';
import './styles.scss';

type Props = PropsForm & {
    type: 'button' | 'submit';
}

export const Button = (props: Props) => {
    return (
        <div className="button-wrapper">
            <button
                className="button-entity"
                type={props.type}
            >
                <span>{props.label}</span>
            </button>
        </div>
    );
}