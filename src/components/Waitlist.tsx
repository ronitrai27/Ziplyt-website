// components/WaitlistBar.tsx

export default function WaitlistBar() {
  return (
    <div className="fixed bottom-8 left-0 right-0 px-4 z-50 flex justify-center">
      <div className="w-full max-w-md bg-white border border-gray-300 rounded-full flex items-center px-4 py-3 shadow-lg">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-grow outline-none bg-transparent text-sm font-inter placeholder:text-gray-400"
        />
        <button className="text-white text-sm font-medium bg-primary-blue px-4 py-2 rounded-full hover:bg-blue-600 transition">
          Join Waitlist
        </button>
      </div>
    </div>
  );
}
