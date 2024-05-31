import {
  HomeIcon,
  GamepadIcon,
  Top10,
  Walkthroughs,
  UserIcon,
} from "@/components";
import { cn } from "@/helpers/cn";
import { NavbarProps } from "./types";
import { NavbarList } from "./NavbarList";
import { NavbarListItemLink } from "./NavbarListIItemLink";
import { NavbarListItemButton } from "./NavbarListItemButton";
import Image from "next/image";

export const Navbar = ({ className, ...props }: NavbarProps) => {
  return (
    <nav
      className={cn(
        "flex h-screen flex-col bg-slate-900 border-r border-indigo-400/20 hover:border-indigo-400/40 w-72 p-2 text-slate-300",
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-center my-4">
        <Image
          src="/images/mtswhite2.png"
          alt="Logo MuteiTodos"
          className="w-auto h-12 p-2"
          width={127}
          height={32}
        />
      </div>
      <NavbarList className={`flex-grow`}>
        <NavbarListItemLink href="/">
          <HomeIcon className="w-4 h-4 " />
          Home
        </NavbarListItemLink>
        <NavbarListItemLink href="/games">
          <GamepadIcon className="w-4 h-4 " />
          Games
        </NavbarListItemLink>
        <NavbarListItemLink href="/top-10">
          <Top10 className="w-4 h-4" />
          Top 10
        </NavbarListItemLink>
        <NavbarListItemLink href="/walkthroughs">
          <Walkthroughs className="w-4 h-4" />
          Walkthroughs
        </NavbarListItemLink>
      </NavbarList>

      <NavbarList className={"-mb-1 -mt-1"}>
        <NavbarListItemLink href="/user">
          <UserIcon className="w-4 h-4" />
          User
        </NavbarListItemLink>
      </NavbarList>
    </nav>
  );
};

/*⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣤⣶⣶⣶⣶⣶⣤⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
 ⠀⠀⠀⠀⠀⠀⣠⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣄⡀⠀⠀⠀⠀⠀ 
 ⠀⠀⠀⣠⣴⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣮⣵⣄⠀⠀⠀ 
  ⢾⣻⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⡀⠀ ⠀
⠸⣽⣻⠃⣿⡿⠋⣉⠛⣿⣿⣿⣿⣿⣿⣿⣿⣏⡟⠉⡉⢻⣿⡌⣿⣳⡥⠀
⠀⢜⣳⡟⢸⣿⣷⣄⣠⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⣤⣠⣼⣿⣇⢸⢧⢣⠀ 
⠀⠨⢳⠇⣸⣿⣿⢿⣿⣿⣿⣿⡿⠿⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⠀⡟⢆⠀ 
⠀⠀⠈⠀⣾⣿⣿⣼⣿⣿⣿⣿⡀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣽⣿⣿⠐⠈⠀⠀
⠀⢀⣀⣼⣷⣭⣛⣯⡝⠿⢿⣛⣋⣤⣤⣀⣉⣛⣻⡿⢟⣵⣟⣯⣶⣿⣄⡀⠀ 
⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣶⣶⣾⣶⣶⣴⣾⣿⣿⣿⣿⣿⣿⢿⣿⣿⣧ 
⣿⣿⣿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⣿⡿

*/
