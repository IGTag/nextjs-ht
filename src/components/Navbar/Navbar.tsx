import {
  HomeIcon,
  GamepadIcon,
  Top10,
  Walkthroughs,
  UserIcon,
} from "@/components";
import { cn } from "@/helpers/cn";

type NavbarProps = React.ComponentProps<"nav">;
type NavbarListProps = React.ComponentProps<"ul">;
type NavbarListItemsProps = React.ComponentProps<"li">;

const NavbarList = ({ children, className, ...props }: NavbarListProps) => {
  return (
    <ul
      className={cn(
        "my-4 border-t border-indigo-400/20 hover:border-indigo-400/40",
        className
      )}
      {...props}
    >
      {children}
    </ul>
  );
};

const NavbarListItem = ({
  children,
  className,
  ...props
}: NavbarListItemsProps) => {
  return (
    <li
      className={cn(
        "my-2 rounded-lg bg-transparent p-2 hover:bg-indigo-400/50 hover:text-slate-100 cursor-pointer flex gap-2 items-center",
        className
      )}
      {...props}
    >
      {children}
    </li>
  );
};

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
        <img
          src="./images/mtswhite2.png"
          alt="Logo MuteiTodos"
          className="w-auto h-12 p-2"
        />
      </div>
      <NavbarList className={`flex-grow`}>
        <NavbarListItem>
          <HomeIcon className="w-4 h-4 " />
          Home
        </NavbarListItem>
        <NavbarListItem>
          <GamepadIcon className="w-4 h-4 " />
          Games
        </NavbarListItem>
        <NavbarListItem>
          <Top10 className="w-4 h-4" />
          Top 10
        </NavbarListItem>
        <NavbarListItem>
          <Walkthroughs className="w-4 h-4" />
          Walkthroughs
        </NavbarListItem>
      </NavbarList>
      <NavbarList className={"-mb-1 -mt-1"}>
        <NavbarListItem>
          <UserIcon className="w-4 h-4" />
          User
        </NavbarListItem>
      </NavbarList>
    </nav>
  );
};
