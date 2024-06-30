import { gridItems } from "@/config/data";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

const Grid = () => {
  return (
    <BentoGrid className="w-full pb-0 pt-20 lg:pb-20 text-white">
      {gridItems.map((item, i) => (
        <BentoGridItem
          id={item.id}
          key={i}
          title={item.title}
          description={item.description}
          className={item.className}
          img={item.img}
          imgClassName={item.imgClassName}
          titleClassName={item.titleClassName}
          spareImg={item.spareImg}
        />
      ))}
    </BentoGrid>
  );
};

export default Grid;
