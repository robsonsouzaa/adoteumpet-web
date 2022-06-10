import { TitleStyled, SubTitle } from "./Title.style";

interface TitleProps {
  title: string;
  subtitle?: string | JSX.Element;
}

export default function Title(props: TitleProps) {
  return (
      <>
        <TitleStyled>{props.title}</TitleStyled>
        <SubTitle>{props.subtitle}</SubTitle>
      </>
  );
}