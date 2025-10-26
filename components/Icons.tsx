import React from 'react';

export const CheckIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${className}`} viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
);

export const LightbulbIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${className}`} viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 2c-2.236 0-4.018 1.815-4.018 4.04 0 .44.041.87.12 1.284a.75.75 0 001.415-.482A2.52 2.52 0 0110 4.542a2.52 2.52 0 012.483 2.298.75.75 0 001.415.482A4.041 4.041 0 0010 2zM3 10.25a.75.75 0 00-1.5 0v.041c0 3.806 2.955 6.909 6.707 7.182a.75.75 0 00.586-1.484 5.71 5.71 0 01-1.306-3.111.75.75 0 00-1.482-.152 7.21 7.21 0 002.488 3.974.75.75 0 001.483-.585 7.21 7.21 0 002.488-3.974.75.75 0 00-1.482.152 5.71 5.71 0 01-1.306 3.111.75.75 0 00.586 1.484C14.545 17.199 17.5 14.095 17.5 10.291V10.25a.75.75 0 00-1.5 0v.041c0 3.01-2.232 5.48-5 5.706V9.75a.75.75 0 00-1.5 0v6.247c-2.768-.226-5-2.696-5-5.706v-.041z" clipRule="evenodd" />
    </svg>
);

export const PackageIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${className}`} viewBox="0 0 20 20" fill="currentColor">
        <path d="M10 2a.75.75 0 01.75.75v5.59l4.97-2.87a.75.75 0 011.02 1.02l-5.5 3.176a.75.75 0 01-.74 0L4.26 6.49a.75.75 0 011.02-1.02L10 8.36V2.75A.75.75 0 0110 2z" />
        <path d="M3.75 6.75a.75.75 0 00-1.02 1.02l5.5 3.176a.75.75 0 00.74 0l5.5-3.176a.75.75 0 00-1.02-1.02l-4.97 2.87-4.97-2.87z" />
        <path d="M3.75 12.75a.75.75 0 00-1.02 1.02l5.5 3.176a.75.75 0 00.74 0l5.5-3.176a.75.75 0 00-1.02-1.02L10 14.36l-4.97-2.87z" />
    </svg>
);

export const PhoneIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${className}`} viewBox="0 0 20 20" fill="currentColor">
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
);

export const MailIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${className}`} viewBox="0 0 20 20" fill="currentColor">
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
    </svg>
);