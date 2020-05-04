import MainLayout from '../../components/templates/MainLayout'
import styled from 'styled-components'
import * as _ from 'lodash'
import { Row, Col } from 'antd'
import { ArticlesList, queryEnum } from '../../components/organisms/ArticleList'
import { useFetchUser } from '../../utils/user'

const StyledRow = styled(Row)`
  ${({ theme }) => `
    padding: ${theme['padding-small']} ${theme['padding-small']};
    display: flex;

    h1 {
      padding-left: ${theme['padding-small']};
      text-align: left;
    }
  `}
`;

const Index = () => {
  const { user, loading } = useFetchUser()
  const owner = _.get(user, 'sub')
  const options = owner ? { variables: { where: { owner } } } : {}

  return (
    <MainLayout title="my articles">
      <StyledRow>
        <Col span={24}>
          <h1>My Articles</h1>
        </Col>
      </StyledRow>
      <div>
        <ArticlesList
          parentRoute="my-articles"
          queryType={queryEnum.articles}
          options={options}
        />
      </div>
    </MainLayout>
  )
}

export default Index
