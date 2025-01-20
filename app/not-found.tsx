import Link from 'next/link';
import NavLink from '@/components/Buttons/Nav/NavLink';
const Custom404 = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
            <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
            <p className="mb-4">Oops! The page you are looking for does not exist.</p>
            <NavLink linktTo="/" btnText="Go Home" />
        </div>
    );
};

export default Custom404;
