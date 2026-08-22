import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "/myportofolio/cv.html", label: "CV/Resume" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  return (
    <div className="fixed top-0 w-full bg-background backdrop-blur-md z-50 border-b border-border/40 px-4">
      <div className="container flex h-16 max-w-screen-xl items-center justify-between mx-auto py-4">
        <a href={import.meta.env.BASE_URL} className="flex items-center space-x-2">
          {/* Instagram-style story ring */}
          <div className="rounded-full p-[2px] bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500">
            <img 
              src={`${import.meta.env.BASE_URL}/profile.jpg`.replace('//', '/')} 
              alt="Profile" 
              className="h-8 w-8 rounded-full border-2 border-background object-cover" 
              width={32} 
              height={32} 
              loading="eager" 
              onError={(e) => {
                // Fallback to a placeholder if the user hasn't uploaded profile.jpg yet
                e.currentTarget.src = `https://ui-avatars.com/api/?name=Niam+Makhali&background=0D8ABC&color=fff&rounded=true`;
              }}
            />
          </div>
        </a>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex ml-auto">
          <NavigationMenuList className="gap-2">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink
                  href={item.href}
                  className={cn(navigationMenuTriggerStyle(), "nav-link-stipple")}
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Navigation */}
        <div className="flex md:hidden relative">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
                  <NavigationMenuContent className="w-fit">
                    <ul className="grid gap-2 p-2">
                      {navItems.map((item) => (
                        <li key={item.href}>
                          <NavigationMenuLink
                            href={item.href}
                            className={cn(
                              "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-transparent hover:text-accent-foreground focus:bg-transparent focus:text-accent-foreground nav-link-stipple"
                            )}
                          >
                            <div className="text-sm font-medium leading-none">
                              {item.label}
                            </div>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </div>
  );
}

export default Navigation;