import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>hELLṢ</h1>
      <Link href="/user"> User Page</Link>
      <ProductCard />
    </main>
  );
}
