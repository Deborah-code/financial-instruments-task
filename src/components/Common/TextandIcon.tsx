import React from "react";
import Style from "./TextandIcon.module.css";

interface TextIconProps {
  data: {
    id: string;
    text: string;
    icon?: React.ReactNode;
  };
  onTextClick?: (headingText: string) => void;
}

const TextIcon: React.FC<TextIconProps> = ({ data, onTextClick }) => {
  const { text, icon, id } = data;
  const handleClick = (id: string) => {
    if (onTextClick) {
      onTextClick(id);
    }
  };
  return (
    <section onClick={() => handleClick(id)} className={Style.container}>
      <h3>{text}</h3>
      {icon && <span style={{ marginLeft: "4px" }}>{icon}</span>}
    </section>
  );
};

export default TextIcon;
