export const Icons = {
    logo: (props: React.SVGProps<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            {...props}
        >
            {/* SVG path data */}
            <path d="M12 0l8 8-8 8-8-8z" />
        </svg>
    ),
    home: (props: React.SVGProps<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            {...props}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9" />
        </svg>
    ),
};
