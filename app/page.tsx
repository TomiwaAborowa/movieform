import Link from 'next/link';

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="relative w-full h-full max-w-4xl mx-auto border-8 border-yellow-50 rounded-lg overflow-hidden">
        <div
          className="h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/bgp.png')" }}
        >
          <div className="flex flex-col justify-between h-full p-4 bg-black bg-opacity-0">
            <div className="flex-grow flex items-center justify-center">
              {/* Optional: You can uncomment the heading if you want to display it */}
              {/* <h1 className="text-4xl font-bold text-white mb-6">Welcome to Our Booking System</h1> */}
            </div>
            <div className="flex justify-center mb-10">
              <Link href="/form" className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded transition duration-300">
                Book a seat now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}