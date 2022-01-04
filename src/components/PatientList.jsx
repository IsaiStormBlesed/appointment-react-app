import Patient from "./Patient"

const PatientList = ({patients}) => {
    return (
        <div className="md:basis-1/2 lg:basis-3/5 overflow-y-scroll md:h-screen">
            <h2 className="font-black text-3xl text-center">List of Patients</h2>
            <p className="text-center mt-5 text-lg">
                See and Manage your
                <span className="text-sky-600 font-bold"> Pets</span>
            </p>

            {
                patients.map((patient) => {
                    return <Patient key={patient.id} patient={patient}/>
                })
            }
        </div>
    )
}

export default PatientList
