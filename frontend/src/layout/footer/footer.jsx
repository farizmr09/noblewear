import React from 'react'
import { NavLink } from 'react-router-dom'
import './footer.scss'

import Insta from '../../assets/svg/Group_8555-insta.svg';
import Whatsapp from '../../assets/svg/Vectorwhatsapp.svg';
import Linkedin from '../../assets/svg/Vector-16-linkedin.svg';
import Facebook from '../../assets/svg/Vector-11-facebook.svg';
import Google from '../../assets/svg/Vector-3-google.svg';


const footer = () => {
    return (
        <>
            <div className="footer_wrapper">
                <div className='footer_wrapper_content'>
                    <div className='footer_wrapper_content_top'>
                        <h2>Noblewear</h2>
                        <p>This project is created to fulfil Workshop on Implementing Software Design - MII21-2504. Developed by Ramzy Izza Wardhana & Fariz Muhammad</p>
                        <div className="footer_wrapper_content_top_social">
                            <span className='insta'>
                                <NavLink to=''>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11 1H5C2.79086 1 1 2.79086 1 5V11C1 13.2091 2.79086 15 5 15H11C13.2091 15 15 13.2091 15 11V5C15 2.79086 13.2091 1 11 1Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8C11 8.79565 10.6839 9.55871 10.1213 10.1213C9.55871 10.6839 8.79565 11 8 11Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <rect x="11" y="5" width="2" height="2" rx="1" transform="rotate(-90 11 5)" fill="white" />
                                        <rect x="11.5" y="4.5" width="1" height="1" rx="0.5" transform="rotate(-90 11.5 4.5)" stroke="white" stroke-linecap="round" />
                                    </svg>
                                </NavLink>
                            </span>
                            <span className='whatsapp'>
                                <NavLink to=''>
                                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9 15.0001C12.1157 14.9994 14.8559 12.9396 15.7224 9.94677C16.5889 6.95397 15.373 3.74874 12.7396 2.0836C10.1062 0.418453 6.68919 0.694279 4.35695 2.76026C2.02471 4.82624 1.3387 8.185 2.674 11.0001L1 15.0001L5.392 14.0001C6.4809 14.6564 7.72862 15.0022 9 15.0001Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.0406 7.06608C6.47129 7.06112 6.01332 6.59646 6.01662 6.02714C6.01992 5.45781 6.48324 4.99849 7.05258 5.00013C7.62191 5.00177 8.08258 5.46375 8.0826 6.03308C8.07985 6.60597 7.61349 7.0683 7.0406 7.06608V7.06608Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.91702 9.91808C9.91378 10.3397 10.1652 10.7217 10.5538 10.8854C10.9424 11.0491 11.3914 10.9622 11.6909 10.6654C11.9904 10.3685 12.0811 9.92028 11.9208 9.53027C11.7605 9.14026 11.3807 8.8855 10.959 8.88508C10.3861 8.88286 9.91978 9.3452 9.91702 9.91808V9.91808Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6.00004 6.03308C5.98604 9.50008 9.30004 11.3301 10.959 10.9511" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                                    </svg>

                                </NavLink>
                            </span>
                            <span className='linkedin'>
                                <NavLink to=''>
                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.25 4C2.25 3.58579 1.91421 3.25 1.5 3.25C1.08579 3.25 0.75 3.58579 0.75 4H2.25ZM0.75 10C0.75 10.4142 1.08579 10.75 1.5 10.75C1.91421 10.75 2.25 10.4142 2.25 10H0.75ZM10.75 10C10.75 10.4142 11.0858 10.75 11.5 10.75C11.9142 10.75 12.25 10.4142 12.25 10H10.75ZM5.5 7H4.75H5.5ZM4.75 10C4.75 10.4142 5.08579 10.75 5.5 10.75C5.91421 10.75 6.25 10.4142 6.25 10H4.75ZM2.25 1C2.25 0.585786 1.91421 0.25 1.5 0.25C1.08579 0.25 0.75 0.585786 0.75 1H2.25ZM0.75 2C0.75 2.41421 1.08579 2.75 1.5 2.75C1.91421 2.75 2.25 2.41421 2.25 2H0.75ZM0.75 4V10H2.25V4H0.75ZM12.25 10V7H10.75V10H12.25ZM12.25 7C12.25 4.92893 10.5711 3.25 8.5 3.25V4.75C9.74264 4.75 10.75 5.75736 10.75 7H12.25ZM8.5 3.25C6.42893 3.25 4.75 4.92893 4.75 7H6.25C6.25 5.75736 7.25736 4.75 8.5 4.75V3.25ZM4.75 7V10H6.25V7H4.75ZM0.75 1V2H2.25V1H0.75Z" fill="white" />
                                    </svg>

                                </NavLink>
                            </span>
                            <span className='facebook'>
                                <NavLink to=''>
                                    <svg width="7" height="16" viewBox="0 0 7 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.25 15C2.25 15.4142 2.58579 15.75 3 15.75C3.41421 15.75 3.75 15.4142 3.75 15H2.25ZM3.75 7C3.75 6.58579 3.41421 6.25 3 6.25C2.58579 6.25 2.25 6.58579 2.25 7H3.75ZM6 1.75C6.41421 1.75 6.75 1.41421 6.75 1C6.75 0.585786 6.41421 0.25 6 0.25V1.75ZM3 4H2.25H3ZM2.25 7C2.25 7.41421 2.58579 7.75 3 7.75C3.41421 7.75 3.75 7.41421 3.75 7H2.25ZM3 6.25C2.58579 6.25 2.25 6.58579 2.25 7C2.25 7.41421 2.58579 7.75 3 7.75V6.25ZM5 7.75C5.41421 7.75 5.75 7.41421 5.75 7C5.75 6.58579 5.41421 6.25 5 6.25V7.75ZM3 7.75C3.41421 7.75 3.75 7.41421 3.75 7C3.75 6.58579 3.41421 6.25 3 6.25V7.75ZM1 6.25C0.585786 6.25 0.25 6.58579 0.25 7C0.25 7.41421 0.585786 7.75 1 7.75V6.25ZM3.75 15V7H2.25V15H3.75ZM6 0.25C3.92893 0.25 2.25 1.92893 2.25 4H3.75C3.75 2.75736 4.75736 1.75 6 1.75V0.25ZM2.25 4V7H3.75V4H2.25ZM3 7.75H5V6.25H3V7.75ZM3 6.25H1V7.75H3V6.25Z" fill="white" />
                                    </svg>

                                </NavLink>
                            </span>
                            <span className='google'>
                                <NavLink to=''>
                                    <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.28353 1.74971C5.69758 1.73814 6.02386 1.39311 6.01229 0.979057C6.00073 0.565005 5.65569 0.238726 5.24164 0.250292L5.28353 1.74971ZM1.00158 5.5L1.75132 5.51996C1.75167 5.50666 1.75167 5.49334 1.75132 5.48004L1.00158 5.5ZM5.26258 10L5.24164 10.7497C5.2556 10.7501 5.26957 10.7501 5.28353 10.7497L5.26258 10ZM9.52358 5.5L10.2733 5.48004C10.2625 5.07374 9.93002 4.75 9.52358 4.75V5.5ZM5.26258 4.75C4.84837 4.75 4.51258 5.08579 4.51258 5.5C4.51258 5.91421 4.84837 6.25 5.26258 6.25V4.75ZM14.8276 3.679C15.2418 3.679 15.5776 3.34321 15.5776 2.929C15.5776 2.51479 15.2418 2.179 14.8276 2.179V3.679ZM13.0016 2.179C12.5874 2.179 12.2516 2.51479 12.2516 2.929C12.2516 3.34321 12.5874 3.679 13.0016 3.679V2.179ZM13.0016 3.679C13.4158 3.679 13.7516 3.34321 13.7516 2.929C13.7516 2.51479 13.4158 2.179 13.0016 2.179V3.679ZM11.1756 2.179C10.7614 2.179 10.4256 2.51479 10.4256 2.929C10.4256 3.34321 10.7614 3.679 11.1756 3.679V2.179ZM12.2516 2.929C12.2516 3.34321 12.5874 3.679 13.0016 3.679C13.4158 3.679 13.7516 3.34321 13.7516 2.929H12.2516ZM13.7516 1C13.7516 0.585786 13.4158 0.25 13.0016 0.25C12.5874 0.25 12.2516 0.585786 12.2516 1H13.7516ZM13.7516 2.929C13.7516 2.51479 13.4158 2.179 13.0016 2.179C12.5874 2.179 12.2516 2.51479 12.2516 2.929H13.7516ZM12.2516 4.857C12.2516 5.27121 12.5874 5.607 13.0016 5.607C13.4158 5.607 13.7516 5.27121 13.7516 4.857H12.2516ZM5.24164 0.250292C2.40939 0.329411 0.176438 2.68761 0.25185 5.51996L1.75132 5.48004C1.69794 3.47505 3.27861 1.80571 5.28353 1.74971L5.24164 0.250292ZM0.25185 5.48004C0.176438 8.31239 2.40939 10.6706 5.24164 10.7497L5.28353 9.25029C3.27861 9.19429 1.69794 7.52495 1.75132 5.51996L0.25185 5.48004ZM5.28353 10.7497C8.11578 10.6706 10.3487 8.31239 10.2733 5.48004L8.77385 5.51996C8.82723 7.52495 7.24656 9.19429 5.24164 9.25029L5.28353 10.7497ZM9.52358 4.75H5.26258V6.25H9.52358V4.75ZM14.8276 2.179H13.0016V3.679H14.8276V2.179ZM13.0016 2.179H11.1756V3.679H13.0016V2.179ZM13.7516 2.929V1H12.2516V2.929H13.7516ZM12.2516 2.929V4.857H13.7516V2.929H12.2516Z" fill="white" />
                                    </svg>

                                </NavLink>
                            </span>
                        </div>
                    </div>
                    <div className="footer_wrapper_content_bottom">
                        <p>Copyright 2023</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default footer