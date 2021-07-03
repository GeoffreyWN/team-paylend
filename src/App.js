import { Helmet } from "react-helmet"
import Layout from "./Components/Layout"

function App() {
  return (
    <>
      <Helmet>
        <title>Team Paylend</title>
        <meta name="description" content="Welcome to Team Paylend. A community built around fintech" />
      </Helmet>

      <Layout>
        yes here
      </Layout>
    </>
  );
}

export default App;
