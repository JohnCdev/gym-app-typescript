type Props = {
  children: React.ReactNode;
};

const Paragraph = ({ children }: Props) => {
  return <p className="my-5 text-sm">{children}</p>;
};

export default Paragraph;
