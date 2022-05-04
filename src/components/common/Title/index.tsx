import { FC } from 'react';
import './styles.scss';

type Props = {
    title: string,
    subTitle?: string
}

export const Title: FC<Props> = ({ title, subTitle }) => {
    return (
        <div className="title">
            <div className="title__main">
                { title }
            </div>
            <div className="title__sub">
                { subTitle }
            </div>
        </div>
    );
}