import { ContentTitle, SectionArea } from "./styled";

export interface IContent {
 title: any;
  body: any;
  extraContent?: string;
  pagination?: any;
}

const Content = ({ title, body, extraContent, pagination }: IContent) => (
  <SectionArea>
    {extraContent}
    <ContentTitle>{title}</ContentTitle>
    {body}
    {pagination}
  </SectionArea>
);

export default Content;
