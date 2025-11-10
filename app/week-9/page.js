"use client";

import Link from "next/link";
import { useUserAuth } from "../../contexts/AuthContext";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  async function handleLogin() {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Login failed:", error);
    }
  }

  async function handleLogout() {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50 text-center">
      <h1 className="text-3xl font-bold mb-6">Shopping List App</h1>

      {!user ? (
        <div>
          <p className="mb-4 text-gray-600">Please log in to continue.</p>
          <button
            onClick={handleLogin}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Login with GitHub
          </button>
        </div>
      ) : (
        <div>
          <p className="mb-4 text-gray-800">
            Welcome, <span className="font-semibold">{user.displayName}</span>{" "}
            ({user.email})
          </p>
          <div className="flex flex-col items-center gap-4">
            <Link
              href="/week-9/shopping-list"
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
            >
              Go to Shopping List
            </Link>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
