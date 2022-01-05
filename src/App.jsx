import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import PatientList from "./components/PatientList";


const App = () => {
    const [patients, setPatients] = useState([])
    const [patientoEdit, setPatientoEdit] = useState({})
    
    return (
        <div className="container mx-auto mt-20 mb-20">
            <Header />

            <div className="mt-20 md:flex">
                <Form 
                    patients={patients}
                    setPatients={setPatients}
                    patientoEdit={patientoEdit}
                    setPatientoEdit={setPatientoEdit}
                />
                <PatientList 
                    patients={patients}
                    setPatientoEdit={setPatientoEdit}
                />
            </div>
        </div>
    )
}

export default App;