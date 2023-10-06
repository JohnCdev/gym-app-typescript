import { SelectedPage } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import Header from "@/shared/header";
import Paragraph from "@/shared/Paragraph";
import { ClassType } from "@/shared/types";
import Class from "./Class";

const classes = [
  {
    name: "Weight Training Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque unde quam aliquam corporis a itaque aspernatur, assumenda laboriosam, placeat corrupti ipsa dolores mollitia ipsam, tempore voluptates dolorem doloribus eaque commodi!",
    image: image1,
  },
  {
    name: "Fitness Classes",
    image: image2,
  },
  {
    name: "Adventure Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque unde quam aliquam corporis a itaque aspernatur, assumenda laboriosam, placeat corrupti ipsa dolores mollitia ipsam, tempore voluptates dolorem doloribus eaque commodi!",
    image: image3,
  },
  {
    name: "Ab Core Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque unde quam aliquam corporis a itaque aspernatur, assumenda laboriosam, placeat corrupti ipsa dolores mollitia ipsam, tempore voluptates dolorem doloribus eaque commodi!",
    image: image4,
  },
  {
    name: "Yoga Classes",
    image: image5,
  },
  {
    name: "Meditation Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque unde quam aliquam corporis a itaque aspernatur, assumenda laboriosam, placeat corrupti ipsa dolores mollitia ipsam, tempore voluptates dolorem doloribus eaque commodi!",
    image: image6,
  },
];

type Props = { setSelectedPage: (value: SelectedPage) => void };

const Classes = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourClasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <div className="mx-auto w-5/6 pb-10">
          <Header>Our Classes</Header>
          <Paragraph>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
            dolores exercitationem pariatur perferendis nihil quibusdam,
            consequuntur tempora minima incidunt ut optio aliquam excepturi
            recusandae accusamus illum ab fugiat quas sit?
          </Paragraph>
        </div>
        {/* side scroll */}
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index: number) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              ></Class>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default Classes;
