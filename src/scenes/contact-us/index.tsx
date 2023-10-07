import { useForm } from "react-hook-form";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import Header from "@/shared/header";
import Paragraph from "@/shared/Paragraph";

type Props = { setSelectedPage: (value: SelectedPage) => void };

const Contact = ({ setSelectedPage }: Props) => {
  const inputStyles =
    "mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white";

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        <Header>
          <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
        </Header>
        <Paragraph>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt in
          totam, sit consequatur ut, facilis illo atque facere incidunt est
          magnam nulla reprehenderit mollitia at sapiente. Magni vel ad soluta!
        </Paragraph>
        <div className="mt-10 justify-between gap-8 md:flex">
          <div className="mt-10 bases-3/5 md:mt-0">
            <form
              target="_blank"
              onSubmit={onSubmit}
              method="POST"
              action="https://formsubmit.co/anonemailcode"
            >
              <input
                className={inputStyles}
                type="text"
                placeholder="NAME"
                {...register("name", { required: true, maxLength: 100 })}
              />
              {errors.name && (
                <Paragraph>
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLegnth" &&
                    "Max length is 100 characters."}
                </Paragraph>
              )}
              <input
                className={inputStyles}
                type="text"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <Paragraph>
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </Paragraph>
              )}
              <textarea
                className={inputStyles}
                rows={4}
                cols={50}
                placeholder="MESSAGE"
                {...register("message", { required: true, maxLength: 2000 })}
              />
              {errors.message && (
                <Paragraph>
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLegnth" &&
                    "Max length is 2000 characters."}
                </Paragraph>
              )}
              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="relative mt-16 basis-2/5 md:mt-0">
            <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
              <img
                className="w-full"
                alt="contact-us-graphic"
                src={ContactUsPageGraphic}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
