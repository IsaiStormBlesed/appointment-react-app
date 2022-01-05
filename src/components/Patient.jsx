const Patient = ({patient}) => {
    const {name, owner, email, date, sympthoms} = patient
    return (
        <div>
            <div className="bg-white px-5 py-7 shadow-md rounded-md mt-10 ml-5">
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

                <div className="flex gap-2">
                    <button 
                        className="bg-sky-600 text-white uppercase hover:bg-sky-700 rounded-md px-4 py-2 mt-3">
                        Edit
                    </button>

                    <button 
                        className="bg-red-600 text-white uppercase hover:bg-red-700 rounded-md px-4 py-2 mt-3">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Patient
