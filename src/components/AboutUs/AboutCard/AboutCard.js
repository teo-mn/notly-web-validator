import React from 'react';
import PropTypes from "prop-types";

const AboutCard: React.FC = (props) => {
    const {no, img, title} = props;
    return (
        <div className={'process-card-wrapper flex justify-around relative my-4'}>
            <div
                className={'process-card border border-primary-yellow rounded-lg bg-white p-4 flex flex-col items-center'}>
                <h5 className={'text-lg text-primary-yellow font-normal place-self-start'}>{no}</h5>
                <img src={img} width={'120'} className={'mt-12'} alt='about'/>
                <h1 className={'text-2xl uppercase font-medium break-words h-14 text-center my-10'}>{title}</h1>
            </div>
        </div>
    )
}

AboutCard.propTypes = {
    no: PropTypes.string,
    img: PropTypes.string,
    title: PropTypes.string,
};

export default AboutCard;
