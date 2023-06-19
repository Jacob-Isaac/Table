import { ContentTitle, SectionArea } from "./styled";
import { IContent } from "../interfaces";

const Content = ({ title, body, extraContent }: IContent) => (
  <SectionArea>
    {extraContent}
    <ContentTitle>{title}</ContentTitle>
    {body}
  </SectionArea>
);

export default Content;
