import { useEffect, useState } from "react"
import Error from "./Error"

const Form = ({ patients, setPatients, patientoEdit, setPatientoEdit}) => {
    const [error, setError] = useState(false)
    const [patient, setPatient] = useState({
        name: '',
        owner: '',
        email: '',
        date: '',
        sympthoms: '',
        id:  ''
    })
    
    useEffect(() => {
        if (Object.keys(patientoEdit).length > 0) {
            setPatient({
                name: patientoEdit.name,
                owner: patientoEdit.owner,
                email: patientoEdit.email,
                date: patientoEdit.date,
                sympthoms: patientoEdit.sympthoms,
                id:  patientoEdit.id
            })
        }
    }, [patientoEdit])


    const handleSubmit = (e) => {
        e.preventDefault()
        //Validate form
        const {name, owner, email, date, sympthoms} = patient
        
        if ([name, owner, email, date, sympthoms].includes('')) {
            setError(true)
            return;
        }

        if (patientoEdit.id) {
            //Edit patient
            setPatient(patient)

            const editedPatient = patients.map((pat) => pat.id == patientoEdit.id ? patient : pat)  
            setPatients(editedPatient)
        } else {
            //Create new patient
            const keyId = Date.now().toString(36) + Math.random().toString(36).substring(2) 
            
            setPatients([...patients, {...patient, id: keyId}])
        }

        setPatient({
            name: '',
            owner: '',
            email: '',
            date: '',
            sympthoms: '',
            id: ''
        })
        
        setPatientoEdit({})
        setError(false)
    }

    return (
        <div className="md:basis-1/2 lg:basis-2/5">
            <h2 className="font-black text-center text-3xl">Register Pet</h2>
            <p className="text-center mt-5 text-lg">
                Add pets and 
                <span className="text-sky-600 font-bold"> Manage Them</span>
            </p>


            <form 
                className="bg-white mt-10 rounded-lg py-10 px-5 shadow-md mb-10"
                onSubmit={handleSubmit}
            >

                {
                    error && <Error />
                }

                <div className="mb-5">
                    <label htmlFor="pet's name" className="block uppercase text-gray-600 font-bold">Pet's name</label>
                    <input 
                        type="text"  
                        id="pet's name" 
                        placeholder="Pet's name" 
                        className="border-2 w-full rounded-md border-gray-600 p-2 placeholder-gray-400 mt-4"
                        value={patient.name}
                        onChange={(e) => setPatient({...patient, name: e.target.value})}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="Owner's name" className="block uppercase text-gray-600 font-bold">Owner's name</label>
                    <input 
                        type="text"  
                        id="Owner's name" 
                        placeholder="Owner's name" 
                        className="border-2 w-full rounded-md border-gray-600 p-2 placeholder-gray-400 mt-4"
                        value={patient.owner}
                        onChange={(e) => setPatient({...patient, owner: e.target.value})}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="Email" className="block uppercase text-gray-600 font-bold">Email</label>
                    <input 
                        type="email"  
                        id="Email" 
                        placeholder="Email" 
                        className="border-2 w-full rounded-md border-gray-600 p-2 placeholder-gray-400 mt-4"
                        value={patient.email}
                        onChange={(e) => setPatient({...patient, email: e.target.value})}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="Date" className="block uppercase text-gray-600 font-bold">Date</label>
                    <input 
                        type="date"  
                        id="Date" 
                        className="border-2 w-full rounded-md border-gray-600 p-2 placeholder-gray-400 mt-4"
                        value={patient.date}
                        onChange={(e) => setPatient({...patient, date: e.target.value})}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="sympthoms" className="block uppercase text-gray-600 font-bold">Sympthoms</label>
                    <textarea  
                        id="sympthoms"
                        className="w-full border-2 border-gray-600 p-2  mt-4 placeholder-gray-400 rounded-md"
                        placeholder="Enter the sympthoms" 
                        value={patient.sympthoms}
                        onChange={(e) => setPatient({...patient, sympthoms: e.target.value})}
                    />
                </div>

                <input 
                    type="submit" 
                    value={Object.keys(patientoEdit).length > 0 ? "Edit Pet" : "Add Pet"} 
                    className="bg-sky-600 w-full p-2 text-white rounded-md cursor-pointer hover:bg-sky-800 transition-colors"
                />
            </form>
        </div>
    )
}

export default Form
