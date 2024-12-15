import Image from "next/image";
import LoginPage from "./components/colours";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      <LoginPage />
    </div>
  );
}
