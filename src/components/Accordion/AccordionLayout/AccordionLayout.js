import React from 'react';

const AccordionLayout = ({title, children, isActive, setIsActive}) => {

    return (
        <>
            <div className='flex container border-b justify-between py-4' onClick={() => setIsActive(!isActive)}>
                <div className='font-bold'>{title}</div>
                <div>{isActive ?
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" className="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5"/>
                    </svg>
                    : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                           stroke="currentColor" className="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
                    </svg>
                }</div>

            </div>

            {isActive && <div className="accordion-content">{children}</div>}

        </>
    )
        ;
};

export default AccordionLayout;
