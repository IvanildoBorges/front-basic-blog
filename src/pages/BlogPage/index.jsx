import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import api from "../../api/api";
import LayoutDefault from "../../components/layout/LayoutDefault";
import Modals from "../../components/Modal";

const BlogPage = () => {
  const [lista, setLista] = useState([]);
  const [show, setShow] = useState(false);
  const [titulo, setTitulo] = useState("");
  const [conteudo, setConteudo] = useState("");

  const getLista = async () => {
    const data = await api.getPosts();
    setLista(data);
  };

  const handleSave = async () => {
    await api.createPost({
      title: titulo,
      content: conteudo,
    });
    alert("Post criado com sucesso!");
    setTitulo("");
    setConteudo("");
    setShow(false);
    getLista();
  };

  const handleDelete = async (item) => {
    const check = confirm("Deseja mesmo excluir esse post?");
    if (check) {
      await api.deletePost(item);
      getLista();
    }
  };

  useEffect(() => {
    getLista();
  }, []);

  return (
    <LayoutDefault>
      <Container>
        <Row className="mt-5">
          <Col>
            <h3>Posts</h3>
            <Modals
              title="Novo post"
              btnName="Novo post"
              show={show}
              setShow={setShow}
              handleSave={handleSave}
            >
              <form>
                <Form.Group className="mt-3">
                  <Form.Label>Título</Form.Label>
                  <Form.Control
                    type="text"
                    value={titulo}
                    required
                    onChange={(e) => setTitulo(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mt-3">
                  <Form.Label>Conteúdo</Form.Label>
                  <Form.Control
                    as="textarea"
                    type="text"
                    value={conteudo}
                    onChange={(e) => setConteudo(e.target.value)}
                  />
                </Form.Group>
              </form>
            </Modals>
            {lista.map((item, index) => (
              <Card key={index} className="mb-5">
                <Card.Header>{item.title}</Card.Header>
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <p> {item.content}. </p>
                    <a href="">Comentar</a>
                  </blockquote>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDelete(item)}
                  >
                    Excluir
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </LayoutDefault>
  );
};

export default BlogPage;
