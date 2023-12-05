import Image from "next/image";
import { Button } from "@vintage/shadcn";
import { getUser } from "@vintage/auth";

export default async function Home() {
  const user = await getUser();
  if (!user) {
    return <div>Not logged in</div>;
  }
  return (
    <main>
      <Button>Boop</Button>
      {user.email}
    </main>
  );
}
