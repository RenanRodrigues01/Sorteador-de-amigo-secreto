import Form from "../components/form/Form"
import List from "../components/list/List"
import Rodape from "../components/footer/Rodape"
import Card from "../components/card/Card"

const Home = () => {
  return (
    <Card>
      <section>
        <h2>Vamos começar!</h2>
        <Form />
        <List />
        <Rodape />
      </section>
    </Card>
  )
}

export default Home
