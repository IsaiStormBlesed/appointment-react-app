import Form from "./components/Form";
import Header from "./components/Header";
import PatientList from "./components/PatientList";


const App = () => {
    return (
        <div className="container mx-auto mt-20">
            <Header />
            <div className="mt-20 md:flex">
                <Form />
                <PatientList />
            </div>
        </div>
    )
}

export default App;