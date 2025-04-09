"use client"
import { useSession } from "@/lib/auth-client";

export default function Home() {
  const {data: session} = useSession();

  return (
    <div className="min-h-screen bg-blue-500 flex items-center justify-center">
      <h1 className="text-white text-4xl">
        Bienvenue sur l'application de location de voiture {" "}
        {session?.session.token}
      </h1>
    </div>
  );
}
