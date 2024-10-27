'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function Home() {

  const router = useRouter();
  console.log(router);
  //create a delay of 3 seconds
  const [loading, setLoading] = useState(true);  
  setTimeout(() => {
    setLoading(false);
  }, 3000);
  return (
    <main disabled={loading} className="flex min-h-screen flex-col items-center p-24">
      <h1>Welcome to Next.js</h1>
      <Link href="/products">Products</Link>
      <Link href="/account">Account</Link>
      <hr></hr>
      <h2 className="text-2xl font-bold">Alternative Way of navigating user useRouter</h2>
      <button onClick={() => router.push('/products')} className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700">Go to Products</button>
    </main>
  );
}
