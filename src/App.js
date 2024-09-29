import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row } from './styles';

const App = () => {
  return (
    <Container>
      <Content>
        <Input/>
        <Row>
          <Button label="÷"/>
          <Button label="x"/>
          <Button label="-"/>
          <Button label="+"/>
        </Row>
        <Row>
          <Button label="9"/>
          <Button label="8"/>
          <Button label="7"/>
          <Button label="="/>
        </Row>
        <Row>
          <Button label="6"/>
          <Button label="5"/>
          <Button label="4"/>
          <Button label="C"/>
        </Row>
        <Row>
          <Button label="3"/>
          <Button label="2"/>
          <Button label="1"/>
          <Button label="0"/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
