import "./new-component.css";
import React from "react";

export interface NewComponentProps {
  className?: string;
}
export const NewComponent: React.FC<NewComponentProps> = ({
  className = "",
}) => (
  <div className="above">
    <div
      className={`${className} move a b cd e f g h j k l saf dfgsdf gsfdhggf hfg hdgfhfghdfghdgfhfdghdfgjghdjhgkljlkfhgfhgjklfhgjklhfgj lkgfdjhlkdgfjhlkfdgjhlkgdjfhlkjgdfkhjgdflkjhdlfgkhlkdfgjhlkdfgjhkjg gfljhdfgkljhdlkfgjhdlfgkjhldfgkjhlgfkdjhlkdfjhldkfgjhdlfgkjhldgkfjhldkgfjhdflgkjhlgdfkjhldfgkjhkldgfhlkdfgjhlkdfgjhlkdfgjhldgfkjhldfgh`}
      style={{ background: "red" }}
    >
      What do you mean?
    </div>
  </div>
);
