import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <header className="flex">
        <Image src="../images/menu.svg" alt="menu" width={32} height={32} />
        <h1>Chats</h1>
        <div className="ml-auto flex">
          <Image
            src="../images/search.svg"
            alt="search"
            width={32}
            height={32}
          />
          <Image src="../images/more.svg" alt="more" width={32} height={32} />
        </div>
      </header>
    </main>
  );
}
