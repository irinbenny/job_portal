import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { FaWheelchair } from 'react-icons/fa';
import '../style/style.css'; // Ensure you have the appropriate CSS file

const AccessibilityButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [fontSize, setFontSize] = useState(16); // Default font size

    const toggleSideBox = () => {
        setIsOpen(!isOpen);
    };

    const increaseFontSize = () => {
        if (fontSize < 24) { // Set max font size limit
            setFontSize(prevSize => prevSize + 2);
            document.body.style.fontSize = `${fontSize + 2}px`;
        }
    };

    const decreaseFontSize = () => {
        if (fontSize > 12) { // Set min font size limit
            setFontSize(prevSize => prevSize - 2);
            document.body.style.fontSize = `${fontSize - 2}px`;
        }
    };

    const resetFontSize = () => {
        setFontSize(16);
        document.body.style.fontSize = '16px';
    };

    return (
        <div>
            <Button className="accessibility-button" onClick={toggleSideBox}>
                <FaWheelchair size={24} />
            </Button>

            {isOpen && (
                <div className="sidebox">
                    <h4>Accessibility Options</h4>
                    <Button className="option-button" onClick={increaseFontSize}>
                        Increase Text Size
                    </Button>
                    <Button className="option-button" onClick={decreaseFontSize}>
                        Decrease Text Size
                    </Button>
                    <Button className="option-button" onClick={resetFontSize}>
                        Reset
                    </Button>
                    <Button className="option-button" onClick={() => document.body.style.filter = 'grayscale(100%)'}>
                        Grayscale
                    </Button>
                    <Button className="option-button" onClick={() => document.body.style.filter = 'none'}>
                        Remove Grayscale
                    </Button>
                </div>
            )}
        </div>
    );
};

export default AccessibilityButton;
