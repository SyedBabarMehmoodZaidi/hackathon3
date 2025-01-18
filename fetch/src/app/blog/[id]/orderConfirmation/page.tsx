import Link from "next/link";

export default function OrderConfirmation() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-yellow-500 to-blue-600 p-8">
      <div className="bg-white shadow-lg rounded-lg p-10 text-center max-w-md">
        <h1 className="text-4xl font-bold text-green-600 mb-4">
          Order Has Been Done!
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Thank you for your order! We&apos;re excited to serve you. Your order has
          been successfully placed and is now being processed.
        </p>
        <div className="text-left text-gray-600">
          <p className="font-semibold">✨ What&apos;s next? ✨</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>We are carefully processing your order.</li>
            <li>You&apos;ll receive tracking details soon.</li>
          </ul>
        </div>

        <div className="flex justify-center items-center gap-8">
          <Link href="/blog">
            <button className="mt-6 px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300">
              Continue Shopping
            </button>
          </Link>
          <Link href="/">
            <button className="mt-6 px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300">
              Back to Home Page
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}

  