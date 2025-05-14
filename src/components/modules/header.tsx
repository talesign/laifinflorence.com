import { cn } from "@/lib/utils";
import {
  forwardRef,
  type ElementRef,
  type ComponentPropsWithoutRef,
} from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { useIsMobile } from "@/hooks/useIsMobile";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { AlignRight, ChevronDown } from "lucide-react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { PrimaryButton } from "../patterns/button";

const navItems = [
  {
    title: "Servizi",
    subItems: [
      {
        title: "Per i proprietari",
        href: "/servizi-proprietari",
        description: "Lorem ipsum sit dolor et amet",
      },
      {
        title: "Per gli ospiti",
        href: "/servizi-ospiti",
        description: "Lorem ipsum sit dolor et amet",
      },
    ],
  },
  {
    title: "Chi siamo",
    href: "/chi-siamo",
  },
  {
    title: "Appartamenti",
    href: "/appartamenti",
  },
  {
    title: "Contatti",
    href: "/contatti",
  },
];

export default function Header() {
  const isMobile = useIsMobile();

  if (!isMobile) {
    return (
      <header className="container sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="content flex h-14 items-center justify-between">
          <a href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-lg">Laif Apartments</span>
          </a>
          <div className="grow">
            <NavigationMenu className="font-bold" orientation="horizontal">
              <NavigationMenuList>
                {navItems.map((item) =>
                  item.subItems ? (
                    <Popover key={item.title}>
                      <PopoverTrigger className="flex gap-2 items-center text-sm">
                        {item.title}
                        <ChevronDown className="h-4 w-4" />
                      </PopoverTrigger>
                      <PopoverContent>
                        {item.subItems.map((subItem) => (
                          <ListItem
                            key={subItem.title}
                            href={subItem.href}
                            title={subItem.title}
                          >
                            {subItem.description}
                          </ListItem>
                        ))}
                      </PopoverContent>
                    </Popover>
                  ) : (
                    <NavigationMenuItem key={item.title}>
                      <NavigationMenuLink href={item.href}>
                        {item.title}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ),
                )}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="">
            <PrimaryButton href="/consulenza" label="Richiedi una consulenza" />
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <a href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold text-lg">Laif Apartments</span>
        </a>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="secondary">
              <AlignRight />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[95vw] sm:max-w-[80vw]">
            <SheetHeader className="bg-accent">
              <SheetTitle>Laif Apartments</SheetTitle>
              <SheetDescription>Lorem ipsum sit dolor et amet</SheetDescription>
            </SheetHeader>
            <nav>
              {navItems.map((item) =>
                item.subItems ? (
                  <div key={item.title}>
                    {item.subItems.map((subItem) => (
                      <div className="block px-4 py-3 text-muted-foreground hover:text-foreground font-bold text-sm">
                        <a key={subItem.title} href={subItem.href}>
                          {subItem.title}
                        </a>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div
                    key={item.title}
                    className="block px-4 py-3 text-muted-foreground hover:text-foreground font-bold text-sm"
                  >
                    <a href={item.href}>{item.title}</a>
                  </div>
                ),
              )}

              <div className="block px-4 py-3 ">
                <PrimaryButton
                  href="/consulenza"
                  label="Richiedi una consulenza"
                />
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

const ListItem = forwardRef<ElementRef<"a">, ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-bold leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    );
  },
);
ListItem.displayName = "ListItem";
