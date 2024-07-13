import Link from "next/link";
import React from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { RiTwitterXFill } from "react-icons/ri";

import { Dock, DockIcon } from "@/components/ui/dock";

export type IconProps = React.HTMLAttributes<SVGElement>;

export function SocialIcons() {
  return (
    <Dock>
      <DockIcon>
        <Link href="https://github.com/azacdev" target="_blank">
          <SiGithub className="h-6 w-6" />
        </Link>
      </DockIcon>

      <DockIcon>
        <Link href="https://twitter.com/azacdev" target="_blank">
          <RiTwitterXFill className="h-6 w-6" />
        </Link>
      </DockIcon>
      <DockIcon>
        <Link href="https://linkedin.com/in/azacdev/" target="_blank">
          <SiLinkedin className="h-6 w-6" />
        </Link>
      </DockIcon>
    </Dock>
  );
}

