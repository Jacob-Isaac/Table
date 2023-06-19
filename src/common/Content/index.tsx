import { ContentTitle, SectionArea } from "./styled";
import { DataRow } from "../interfaces";

export interface IContent {
  title: string;
  body: React.ReactNode;
  extraContent?: string;
}

const Content = ({ title, body, extraContent }: IContent) => (
  <SectionArea>
    {extraContent}
    <ContentTitle>{title}</ContentTitle>
    {body}
  </SectionArea>
);

export default Content;
