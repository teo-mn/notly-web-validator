import React from 'react';
import PropTypes from 'prop-types';

const SchoolCard: React.FC = (props) => {
    const {title, founded, text, img} = props;
    return (
        <div className={"schools-cards flex justify-center"}>
            <div
                className={'w-full lg:max-w-full mb-4 school-card border-primary-yellow border drop-shadow-yellow rounded-lg bg-white'}>

                <div className={'h-40 p-10 flex justify-center'}>
                    <img src={img} alt={'Schools logos'}/>
                </div>

                <div className={'p-6 pt-0 flex flex-col'}>
                    <div className={'h-18 sm:h-16 text-gray-900 font-bold text-xl leading-6 text-center mb-3'}>
                        {title}
                    </div>
                    <p className={'text-gray-700 text-base pt-0'}>{founded}</p>
                    <p className={'text-gray-700 text-base py-2'}>{text}</p>
                </div>
            </div>

        </div>
    )
}

SchoolCard.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    founded: PropTypes.string,
    text: PropTypes.string
};

export default SchoolCard;
