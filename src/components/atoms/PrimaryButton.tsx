import React, { ReactNode } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
  bgColor: string;
  children: ReactNode;
  onClick: () => void;
};

export const PrimaryButton = (props: Props) => {
  const { bgColor, children, onClick } = props;
  return (
    <Button
      bg={bgColor}
      color="white"
      borderRadius={10}
      _hover={{ opacity: 0.8 }}
      margin={4}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
