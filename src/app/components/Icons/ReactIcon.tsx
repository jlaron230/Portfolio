import React from "react";

export interface IconsProps {
    className?: string;
}

const ReactIcon: React.FC<IconsProps> = ({ className }) => {
    return (
        <>{
        <svg
            viewBox="-8 -8 80 80"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="React logo"
        >
            {/* Noyau */}
            <circle cx="32" cy="32" r="4.2" fill="#61DAFB" />

            {/* Orbite horizontale */}
            <ellipse
                cx="32"
                cy="32"
                rx="22"
                ry="9"
                fill="none"
                stroke="#61DAFB"
                strokeWidth="2"
            />

            {/* Orbite diagonale 1 */}
            <ellipse
                cx="32"
                cy="32"
                rx="22"
                ry="9"
                fill="none"
                stroke="#61DAFB"
                strokeWidth="2"
                transform="rotate(60 32 32)"
            />

            {/* Orbite diagonale 2 */}
            <ellipse
                cx="32"
                cy="32"
                rx="22"
                ry="9"
                fill="none"
                stroke="#61DAFB"
                strokeWidth="2"
                transform="rotate(-60 32 32)"
            />
        </svg>
        }
        </>
    );
};

export default ReactIcon;
