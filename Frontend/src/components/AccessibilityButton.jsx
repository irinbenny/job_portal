import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { FaWheelchair } from 'react-icons/fa';
import '../style/style.css'; // Ensure you have the appropriate CSS file

const AccessibilityButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleSideBox = () => {
        setIsOpen(!isOpen);
    };

   

    return (
        <div>
            <Button className="accessibility-button" onClick={toggleSideBox}>
                <FaWheelchair size={24} />
            </Button>

          
        </div>
    );
};

export default AccessibilityButton;
