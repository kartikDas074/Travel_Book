"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlink = ({ href, children }) => {
  const pathname = usePathname();
  
 
  const isactive = pathname === href;
  
  return (
    <Link 
      href={href} 
      className={`relative py-2 px-1 text-sm md:text-base font-semibold tracking-wide transition-all duration-300 select-none
        ${isactive 
          ? 'text-indigo-600 dark:text-indigo-400 font-bold' 
          : 'text-[black] dark:text-zinc-400 hover:text-gray-900 dark:hover:text-zinc-100' 
        }`}
    >
      <span>{children}</span>

     
      <span 
        className={`absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full transition-all duration-300 ease-out
          ${isactive 
            ? 'w-full opacity-100 shadow-[0_2px_8px_rgba(79,70,229,0.4)]' 
            : 'w-0 opacity-0 group-hover:w-full'
          }`}
      />
    </Link>
  );
};

export default Navlink;