"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/constants";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNav = () => {
    const pathname = usePathname();
  return (
    <header className="header">
      <Link href="/" className="flex items-center gap-2 md:py-2">
        <Image
          src={"/assets/images/logo-text.svg"}
          alt="LOGO"
          width={180}
          height={28}
        />
      </Link>
      <nav className="flex gap-2">
     
          <UserButton afterSignOutUrl="/" />

          <Sheet>

            <SheetTrigger>
                <Image
                src={"/assets/icons/menu.svg"}
                alt="menu"
                width={32}
                height={32}
                className="cursor-pointer"
                />

            </SheetTrigger>
            <SheetContent className="sheet-content sm:w-64">
              <>
              <Image
                src={"/assets/images/logo-text.svg"}
                alt="logo"
                width={152}
                height={23}
                className="cursor-pointer"
                />
                 <SignedIn>
                <ul className="header-nav_elements">
                   {navLinks.map((link)=>{
                    console.log(link.label)
                    const isActive = link.route === pathname
                    return  (
                         <li
                         className={`${isActive && 'gradient-text'} p-18 flex whitespace-nowrap text-dark-700`}
                         
                         key={link.route} >
                           <Link href={link.route} className="sidebar-link
                           cursor-pointer "
                           
                           >
                            <Image
                            src={link.icon}
                            alt="logo"
                            width={24}
                            height={24}
                            // className={`${isActive && 'brightness-200'}`}

                            />
                            {link.label}
                           </Link>
                         </li>
                    )

                   })} 
                   </ul>
                   
                   <ul>
                   <li className="flex-center cursor-pointer gap-2 p-4">
                     <UserButton afterSignOutUrl='/' showName />
                   </li>
                </ul>
                
              </SignedIn>

              </>
            </SheetContent>
          </Sheet>
          <SignedOut>
               <Button>
                <Link href={"/sign-in"}>Login</Link>
               </Button>

              </SignedOut>
  
      </nav>
    </header>
  );
};

export default MobileNav;
