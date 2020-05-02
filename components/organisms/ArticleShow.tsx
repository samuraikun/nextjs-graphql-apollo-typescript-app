import { Article } from '../../generated/apollo-components'
import { Row, Col, List } from 'antd'
import * as _ from 'lodash'
import GraphImg from 'graphcms-image'
import styled from 'styled-components'
import { generateUnit } from '../../utils/generateUnit'
import { GenerateContent } from '../molecules/GenerateContent'

const StyledArticle = styled(Col)`
  ${({ theme }) => `
    margin-top: ${theme['margin-small']};
    min-height: 320px;
    border-radius: 8px;
    box-shadow: 0 0 16px ${theme['border-color']};
    border: ${theme['border-width']} solid ${theme['border-color']};

    .graph-image-outer-wrapper {
      border: 0px;

      .graphcms-image-wrapper {
        border: 0px;
        position: relative;
        float: left;
        width: 100%;
        height: 400px;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-size: cover;

        img {
          text-align: center;
          border-radius: 6px 6px 0px 0px;
        }
      }
    }

    h1,
    h2 {
      padding-top: ${theme['margin-small']};
      text-align: left;
    }

    h3 {
      text-align: left;
    }
  `}
`

export const ArticleShow = ({ article }: { article: Article }) => (
  <Row>
    <StyledArticle
      sm={{ span: 20, offset: 2 }}
      md={{ span: 16, offset: 4 }}
      lg={{ span: 12, offset: 6 }}
    >
      <Row>
        <Col span={24}>
          <GraphImg image={article.images} />
        </Col>
      </Row>
      <Row>
        <Col span={20} offset={2}>
          <h1>{article.title}</h1>
          <p>{article.description}</p>
        </Col>
      </Row>
      <Row>
        <Col span={20} offset={2}>
          <GenerateContent textString={article.content} />
        </Col>
      </Row>
    </StyledArticle>
  </Row>
)
