import { Layout, Row, Col } from 'antd'

const { Footer } = Layout
const MainFooter = () => (
  <Footer>
    <Row>
      <Col sm={{ span: 22, offset: 1 }}>
        <h3>美味しいみかんがいっぱい🍊</h3>
      </Col>
    </Row>
  </Footer>
)

export default MainFooter
