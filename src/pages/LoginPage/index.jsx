import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import api from "../../api/api";

const LoginPage = () => {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!login.trim() || !senha.trim()) return;

    const data = await api.getUsuarios();

    if (data.length) {
      const user = data[0];

      if (user.login === login && user.password === senha) {
        return navigate("/home");
      }
    }

    alert("Login ou senha inválido!");
  };

  return (
    <Container>
      <Row className="mt-5">
        <Col md={{ span: 3, offset: 3 }}>
          <form>
            <Form.Group>
              <Form.Label>Login</Form.Label>
              <Form.Control
                type="text"
                value={login}
                required
                onChange={(e) => setLogin(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Label>Senha</Form.Label>
              <Form.Control
                type="password"
                value={senha}
                required
                onChange={(e) => setSenha(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mt-3">
              <Button variant="primary" onClick={handleLogin}>
                Acessar
              </Button>
            </Form.Group>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
