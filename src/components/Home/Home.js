import React from 'react';
import Dropzone from 'react-dropzone';
import classNames from 'classnames';
import {hot} from 'react-hot-loader';
import CoreValidator from '../../CoreValidator';
import Modal from '../../components/Modal';

import numlogo from "../../assets/images/school-logos/gray-logos/logo_num_gray.png";
import mustlogo from "../../assets/images/school-logos/gray-logos/logo_must_gray.png";
import ufelogo from "../../assets/images/school-logos/gray-logos/logo-ufe-gray.png";
import PMIlogo from "../../assets/images/school-logos/gray-logos/logo_PMI_gray.png";
import MStarslogo from "../../assets/images/school-logos/gray-logos/logo_MstarsHub_gray.png";
import LandingAnimationLottie from "../../components/LandingAnimation/LandingImage";
import type { IntlProps } from '../../App';
import {injectIntl} from "react-intl";

class Home extends React.Component<IntlProps> {
    state = {
        loading: false,
        preError: null,
        result: null,
        error: null,
        modalOpen: false,
        pdf: null
    };

    validateJS = (file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            this.setState({pdfArrayBuffer: e.target.result, modalOpen: true});
        };

        reader.readAsArrayBuffer(file);
    }

    processPDF = (acceptedFiles) => {
        if (!acceptedFiles.length) {
            const preError = 'Not a valid PDF file';
            console.error(preError);
            this.setState({preError});
            return;
        }
        if (acceptedFiles.length > 1) {
            const preError = 'You can only validate one file at a time';
            console.error(preError);
            this.setState({preError});
            return;
        }

        this.setState({loading: true, preError: null});

        this.validateJS(acceptedFiles[0]);
    }

    cleanUp = () => {
        this.setState({
            result: null,
            error: null,
            loading: false,
            pdf: null
        });
    }

    closeModal = () => {
        this.setState({modalOpen: false});
        this.cleanUp();
    }

    translate = (id) => id ? this.props.intl.formatMessage({ id }) : id;

    render() {
        const { isOrgAllowed } = window.env;

        return (
            <div className="App">

                <div className={'container mx-auto h-[74vh]'} id={'main-container'}>
                    <div className={'grid grid-cols-1 md:grid-cols-2 gap-4'}>
                        <div className={'landing-title-container lg:mt-52 sm:mt-44 px-10 md:px-0'}>
                            <div className={'mb-10 sm:mb-16'}>
                                <h1 className={'landing-title text-[22px] sm:text-[32px] font-bold uppercase'}><span
                                    className={'titleBlockchainText text-[22px] sm:text-[32px] font-bold'}>Блокчэйн</span> Сүлжээнд
                                </h1>
                                <h1 className={'landing-title text-[22px] sm:text-[32px] font-bold uppercase'}>Дипломоо
                                    Баталгаажуул</h1>
                            </div>

                            <div className={'dropzone-field flex justify-between'}>
                                <Dropzone className={'drag-and-drop cursor-pointer'} onDrop={this.processPDF}
                                          multiple={false} accept="application/pdf">
                                    {({getRootProps, getInputProps, isDragActive}) => (
                                        <div {...getRootProps()}
                                             className={classNames('dropzone', {'hover': isDragActive})}>
                                            <input id='pdf_dropzone' {...getInputProps()} />
                                            {
                                                isDragActive ?
                                                    <div id='pdf_dropzone'
                                                         className={'text-sm sm:text-base font-medium mx-4 sm:mx-8 mt-3 sm:mt-7'}>Файл
                                                        (drag & drop)</div> :
                                                    <div id='pdf_dropzone'
                                                         className={'text-sm sm:text-base font-medium flex justify-between'}>
                                                        <span className={'dropzone-text self-center mx-4 sm:mx-6'}>Диплом оруулах хэсэг</span>
                                                        <span className={'dropzone-btn uppercase'}>Баталгаажуулах</span>
                                                    </div>
                                            }
                                        </div>
                                    )}
                                </Dropzone>
                            </div>
                        </div>
                        <div className={'flex justify-center lg:mt-20 md:mt-16 landing-animation'}>
                            <LandingAnimationLottie/>
                        </div>

                    </div>
                </div>

                <div id={'sub-container'}>
                    <div className={`w-full mx-auto px-16 pt-9 pb-6${!isOrgAllowed ? ' invisible' : ''}`}>
                        <h1 className={'text-base font-medium uppercase mb-8'}>Байгууллагууд</h1>
                        <div className={'flex justify-center md:justify-start'}>
                            <img src={numlogo} className={"h-14 pr-6"} alt={"Num_logo"}/>
                            <img src={mustlogo} className={"h-14 px-6"} alt={"Num_logo"}/>
                            <img src={ufelogo} className={"h-12 px-6"} alt={"Num_logo"}/>
                            <img src={PMIlogo} className={"h-10 px-6"} alt={"PMI_logo"}/>
                            <img src={MStarslogo} className={"h-10 px-6"} alt={"MStarslogo"}/>
                        </div>
                    </div>
                </div>



                <Modal
                    isOpen={this.state.modalOpen}
                    closeModal={this.closeModal}
                    body={
                        <CoreValidator
                            pdfArrayBuffer={this.state.pdfArrayBuffer}
                            contactName={this.props.contactName}
                            contactEmail={this.props.contactEmail}
                            organization={this.props.organization}
                            docType={this.props.docType}
                            blockchainServices={this.props.blockchainServices}
                            closeFunction={this.closeModal}
                        />
                    }
                />
            </div>
        );
    }
}

Home.defaultProps = {
    blockchainServices: {
        'corex': {
            requiredSuccesses: 1,
            services: [{
                name: process.env.REACT_APP_SERVICE_NAME,
                url: process.env.REACT_APP_SERVICE_URI
            }]
        }
    }
};

export default injectIntl(hot(module)(Home));
