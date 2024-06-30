import React from "react";

import { MacbookScroll } from "@/components/ui/macbook-scroll";

const MacbookScrollDemo = () => {
  return (
    <div className="overflow-hidden w-full">
      <MacbookScroll src={`/linear.webp`} showGradient={false} />
    </div>
  );
};

export default MacbookScrollDemo;
