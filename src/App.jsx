import { useEffect, useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import PatientList from "./components/PatientList";


const App = () => {
    const [patients, setPatients] = useState(() => {
      const saved = localStorage.getItem('patients')
      const initialValue = JSON.parse(saved)
      return initialValue || []
    })
    
    const [patientoEdit, setPatientoEdit] = useState({})

    useEffect(() => {
      localStorage.setItem('patients', JSON.stringify(patients))
    }, [patients])

    const deletePatient = (id) => {
      const deletedPatients = patients.filter((pat) => pat.id != id)
      setPatients(deletedPatients)
    }
    
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
                    deletePatient={deletePatient}
                />
            </div>
        </div>
    )
}

export default App;