import { Row, Col, Alert } from 'antd'
import styled from 'styled-components'

const StyleCol = styled(Col)`
  text-align: center;
  margin-top: 200px;
`

export const Error = ({ errorText }: { errorText: string }) => (
  <Row>
    <StyleCol span={12} offset={6}>
      <Alert
        message="エラーが発生しました!"
        description={errorText || 'Error'}
        type="error"
      />
    </StyleCol>
  </Row>
)
