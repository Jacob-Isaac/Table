import { ContentTitle, SectionArea } from "./styled";

const Content = ({ title, body, extraContent, pagination }) => (
  <SectionArea>
    {extraContent}
    <ContentTitle>{title}</ContentTitle>
    {body}
    {pagination}
  </SectionArea>
);

export default Content;
