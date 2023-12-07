
import React from "react";
import { UserProfileDropdown } from "@vintage/ui/layout/vintage";
import Link from "next/link";
import { buttonVariants } from "@vintage/shadcn/ui";
import { auth } from "@vintage/auth";

export const ProfileHeader = async () => {
  const data = await auth();
  const user = data?.user;
  const initials = `${user?.name?.charAt(0) ?? ""}`;
  return (
    <>
      {user ? (
        <>
          <span>Go To Dashboard</span>
          <UserProfileDropdown
            data={data}
            initials={initials}
          ></UserProfileDropdown>
        </>
      ) : (
        <Link href={"/sign-in"}>
          <div
            className={buttonVariants({
              size: "sm",
            })}
          >
            Sign In
            <span className="sr-only">Sign In</span>
          </div>
        </Link>
      )}
    </>
  );
};
