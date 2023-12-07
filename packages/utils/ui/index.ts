import { Session } from "@vintage/auth";

export type UserProfileDropdownProps = {
  data: Session;
  initials: string | undefined;
};
