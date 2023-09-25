import { FC } from "react";

// Nav Items with tailwind css, link to sections of landing page , li elements
interface Props {
  text: string;
  href: string;
}
export const NavItems: FC<Props> = ({ text, href }) => {
  return (
    <li className="text-sm py-2 relative transition-opacity ease-in-out duration-300 font-bold text-white opacity-50 flex flex-col after:h-1  hover:opacity-100  after:absolute after:bottom-0 after:left-1/2 after:transition-all  after:opacity-0 hover:after:opacity-100 after:duration-300 after:ease-in-out  after:-translate-x-1/2  after:content-[''] after:w-0 hover:after:w-1/2 after:bg-primary">
      <a className="capitalize outline-none decoration-transparent" href={href}>
        {text}
      </a>
    </li>
  );
};
