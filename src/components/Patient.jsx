const Patient = ({patient}) => {
    const {name, owner, email, date, sympthoms} = patient
    return (
        <div>
            <div className="bg-white px-5 py-10 shadow-md rounded-md mt-10 ml-5">
                <p className="font-bold text-gray-700 uppercase mb-5">
                    Name:
                    <span className="font-normal normal-case"> {name}</span>
                </p>
                <p className="font-bold text-gray-700 uppercase mb-5">
                    Owner:
                    <span className="font-normal normal-case"> {owner}</span>
                </p>
                <p className="font-bold text-gray-700 uppercase mb-5">
                    Email:
                    <span className="font-normal normal-case"> {email}</span>
                </p>
                <p className="font-bold text-gray-700 uppercase mb-5">
                    Date:
                    <span className="font-normal normal-case"> {date}</span>
                </p>
                <p className="font-bold text-gray-700 uppercase mb-5">
                    Sympthoms:
                    <span className="font-normal normal-case"> {sympthoms}</span>
                </p>
            </div>
        </div>
    )
}

export default Patient
