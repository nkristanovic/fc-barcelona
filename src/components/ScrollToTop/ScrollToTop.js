import React, { useState, useEffect } from 'react';
import { FaAngleUp } from 'react-icons/fa';
import {
    ScrollWrapper
} from './ScrollToTopStyle';

const ScrollToTop = () => {

    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            {showTopBtn && (
                <ScrollWrapper>
                    <FaAngleUp style={{ color: 'white' }} onClick={goToTop} />
                </ScrollWrapper>
            )}
        </>
    );
}

export default ScrollToTop;