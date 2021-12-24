const Form = () => {
    return (
        <div className="md:basis-1/2 lg:basis-2/5">
            <h2 className="font-black text-center text-3xl">Register Pet</h2>
            <p className="text-center mt-5 text-lg">
                Add pets and 
                <span className="text-sky-600 font-bold"> Manage Them</span>
            </p>

            <form action="" className="bg-white mt-10 rounded-lg py-10 px-5 shadow-md mb-10">
                <div className="mb-5">
                    <label htmlFor="pet's name" className="block uppercase text-gray-600 font-bold">Pet's name</label>
                    <input 
                        type="text"  
                        id="pet's name" 
                        placeholder="Pet's name" 
                        className="border-2 w-full rounded-md border-gray-600 p-2 placeholder-gray-400 mt-4"
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="Owner's name" className="block uppercase text-gray-600 font-bold">Owner's name</label>
                    <input 
                        type="text"  
                        id="Owner's name" 
                        placeholder="Owner's name" 
                        className="border-2 w-full rounded-md border-gray-600 p-2 placeholder-gray-400 mt-4"
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="Email" className="block uppercase text-gray-600 font-bold">Email</label>
                    <input 
                        type="email"  
                        id="Email" 
                        placeholder="Email" 
                        className="border-2 w-full rounded-md border-gray-600 p-2 placeholder-gray-400 mt-4"
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="Date" className="block uppercase text-gray-600 font-bold">Date</label>
                    <input 
                        type="date"  
                        id="Date" 
                        className="border-2 w-full rounded-md border-gray-600 p-2 placeholder-gray-400 mt-4"
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="sympthoms" className="block uppercase text-gray-600 font-bold">Pet's name</label>
                    <textarea  
                        id="sympthoms"
                        className="w-full border-2 border-gray-600 p-2  mt-4 placeholder-gray-400 rounded-md"
                        placeholder="Enter the sympthoms" 
                    />
                </div>

                <input 
                    type="submit" 
                    value="Add Pet" 
                    className="bg-sky-600 w-full p-2 text-white rounded-md cursor-pointer hover:bg-sky-800 transition-colors"
                />
            </form>
        </div>
    )
}

export default Form
