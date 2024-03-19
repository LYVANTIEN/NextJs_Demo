import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <title>Tien Van</title>
      <div className="max-w-md w-full bg-gray-200 shadow-lg rounded-lg p-8">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-48 w-48 rounded-full bg-gray-300 overflow-hidden">
            <Image src="/image/aaa.jpg" alt="Profile Picture" width={384} height={384} className="rounded-full" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mt-4">Ly Van Tien</h2>
          <p className="text-sm font-medium text-gray-600">Web Developer</p>
          <div className="mt-6 flex justify-center">
            <a href="https://www.facebook.com/profile.php?id=100025326151812" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">
              Visit Facebook
            </a>
          </div>
        </div>
        <div className="mt-6">
          <div className="text-center">
            <p className="text-base text-gray-600">
              Email: <a href="mailto:vantien2112@gmail.com" className="text-blue-500">vantien2112@gmail.com</a>
            </p>
            <p className="text-base text-gray-600">
              Location: Can Tho, Viet
            </p>
            <p className="text-base text-gray-600">
              Education: <a href="https://example.com" className="text-blue-500">Can Tho FPT Education</a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
