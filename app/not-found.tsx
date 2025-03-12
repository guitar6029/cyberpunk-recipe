import Link from "next/link";

const Custom404 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <div className="flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl md:text-6xl font-bold mb-4">Page Not Found</h1>
        <Link href="/">Go Home</Link>
      </div>
    </div>
  );
};

export default Custom404;
