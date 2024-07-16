import SmallParagraph from "../components/SmallParagraph";

const Footer: React.FC = () => {
  return (
    <footer className="bg-background h-20 px-8 border-t-4 border-black flex justify-center mt-12 w-full">
      <div className="flex items-center">
        <SmallParagraph text="Copyright ©おだいば All Rights Reserved." />
      </div>
    </footer>
  );
};

export default Footer;
