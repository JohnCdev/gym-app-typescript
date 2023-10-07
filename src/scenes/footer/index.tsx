import Logo from "@/assets/Logo.png";
import Paragraph from "@/shared/Paragraph";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <Paragraph>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
            ducimus atque, blanditiis cupiditate eligendi maxime vero, expedita
            porro ex explicabo excepturi esse voluptatibus repellat quae officia
            veritatis tenetur consectetur debitis.
          </Paragraph>
          <Paragraph>C Evogym</Paragraph>
        </div>
        <div className="mt-16 bases-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <Paragraph>Lorem, ipsum dolor</Paragraph>
          <Paragraph>Lorem, ipsum dolor</Paragraph>
        </div>
        <div className="mt-16 bases-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <Paragraph>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam est
            illum laboriosam, provident repudiandae dolores eos recusandae fugit
            perferendis ducimus magnam. Commodi qui dolorum fuga similique
            asperiores aut minus? Ab!
          </Paragraph>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
