import React from 'react';
import mockup1 from '../../assets/images/mockup1.png'
import mockup2 from '../../assets/images/mockup2.png'
import iphone from '../../assets/images/iphoneApp.png'
import android from '../../assets/images/androidApp.png'

const DownloadApp = () => {
    return (
        <div className={'container grid md:grid-cols-2 grid-cols-1 mx-auto p-8 h-full'}>
            <div className={'flex items-center mt-[-260px]'}>
                <div>
                    <h1 className={'text-4xl font-bold'}>
                        Lorem ipsum dolor sit amet ipsum
                    </h1>
                    <p className={'text-xl my-8'}>Дижитал өмч</p>
                    <div className={'flex'}>
                        <a className={'mr-5 w-40'} href={'https://apps.apple.com/mn/app/notly-mn/id6443554928'} target={'_blank'}>
                            <img src={iphone} alt={'iphone'}/>
                        </a>
                        <a className={'w-40'} href={'https://play.google.com/store/apps/details?id=mn.corex.notly'} target={'_blank'}>
                            <img src={android} alt={'android'}/>
                        </a>
                    </div>
                </div>
            </div>
            <div className={'flex'}>
                <img className={''} src={mockup1} alt={'App mockup'}/>
                <img className={'mt-16'} src={mockup2} alt={'App mockup'}/>
            </div>
        </div>
    )
}

export default DownloadApp;
