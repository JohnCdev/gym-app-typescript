import useMediaQuery from "@/hooks/useMediaQuery";
import { BenefitType, SelectedPage } from "@/shared/types";
import Header from "@/shared/header";
import Paragraph from "@/shared/Paragraph";
import ActionButton from "@/shared/ActionButton";
import BenefitCard from "./BenefitCard";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dolorum vitae ",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Diverse Classes",
    description:
      "provident quasi doloremque possimus, consequuntur quae sapiente expedita voluptatibus sunt,",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert Trainers",
    description:
      "reiciendis accusantium facere similique facilis commodi eveniet reprehenderit laborum!",
  },
];

const container = {
  hiddem: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreenSize = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* Header */}
        <div className="md:my-5 md:w-3/5">
          <Header>MORE THAN JUST A GYM.</Header>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            maxime dolore architecto accusantium praesentium similique nihil
            assumenda placeat vero, quia natus sint, unde, corporis atque ipsam
            quos. Repellat, consequuntur labore.
          </Paragraph>
        </div>
        {/* Benefits */}
        <motion.div
          className="md:flex items-center justify-between gap-8 mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <BenefitCard
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* Graphic and Description */}
        <div className="mt-5 items-center justify-between">
          <img
            className="mx-auto"
            alt="benfits-page-graphic"
            src={BenefitsPageGraphic}
          />
          <div className="relative">
            <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
              <div>
                <Header>
                  MILLIONS OF HAPPY MEMBERS GETTING{" "}
                  <span className="text-primary-500">FIT</span>
                </Header>
              </div>
            </div>
          </div>
          <div>
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              voluptatum sit odio quis aspernatur laboriosam? Veniam soluta
              eveniet quos doloribus maiores tempore obcaecati nisi, aliquam
              quis laborum qui autem maxime!
            </Paragraph>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
              sequi corporis deleniti commodi reprehenderit officia eligendi
              quod? Soluta voluptate accusamus maiores perferendis harum.
              Placeat quasi aspernatur unde sint ducimus voluptas.
            </Paragraph>
          </div>
          <div className="relative mt-16">
            <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
              <ActionButton setSelectedPage={setSelectedPage}>
                Join Now
              </ActionButton>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
