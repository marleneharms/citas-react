import Header from "./components/header";
import Form from "./components/Form";
import PatientsList from "./components/PatientsList";
function App() {
  return (
    <div className="container mx-auto mt-20">
      <Header />
      <Form />
      <PatientsList />
    </div>
  );
}

export default App;
