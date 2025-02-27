"use client";

import React, { useState } from "react";
import { useMounted } from "@/lib/hooks/use-mounted";
import { cn } from "@vintage/utils/utils";
import { Button, Skeleton, buttonVariants } from "@vintage/shadcn";
import { Icons } from "@vintage/utils/icons";
import { signOut } from "@vintage/auth";

export const LogOutButtons = () => {
  const isMounted = useMounted();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  return (
    <div className="flex w-full items-center space-x-2">
      {isMounted ? (
        <>
          <Button
            size="sm"
            aria-label="Log out"
            className="w-full"
            disabled={isLoading}
            onClick={async () => {
              setIsLoading(true);
              await signOut({ redirect: true, callbackUrl: "/" });
            }}
          >
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Log out
          </Button>
          <Button size={"sm"} className="w-full" variant="outline">
            Go back
          </Button>
        </>
      ) : (
        <>
          <Skeleton
            className={cn(
              buttonVariants({ size: "default" }),
              "w-full bg-muted text-muted-foreground"
            )}
          ></Skeleton>
          <Skeleton
            className={cn(
              buttonVariants({ size: "default" }),
              "w-full bg-muted text-muted-foreground"
            )}
          ></Skeleton>
        </>
      )}
    </div>
  );
};
