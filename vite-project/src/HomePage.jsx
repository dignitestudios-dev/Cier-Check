import axios from "axios"
import { useState } from "react"


// const stripe = require('stripe')('pk_test_51Q2yhB01C6x1l3qH9ufqrvzJYbI9bbVQMUO8AzMCNAB0faCbujorh95XfMy4tLY0U34D5g37JTPCTPK2yLlFZ8y6005BAkk0fq');
function HomePage() {
    const [loading, setLoading] = useState(false)

    const buyfunction = async () => {
        setLoading(!loading)
        const response = await axios.post('http://localhost:3000/payment')
        if (response && response.status === 200) {

            window.location.href = response.data.url

            console.log(response.data)
        }
    }



    return (
        <div className="w-full h-screen flex items-center justify-center">
            <button onClick={buyfunction} className="px-6 py-2.5 bg-pink-600 text-white font-semibold rounded-lg flex items-center gap-2 w-40 justify-center h-14">
                {loading ? <div className="loader z-10"></div> : 'Donate Now'}
            </button>
            {/* {
        loading &&
        <div className="w-full h-screen bg-[rgba(0,0,0,0.4)] absolute inset-0 z-40 flex items-center justify-center">
          <div className="loader z-10"></div>
        </div>
      } */}
        </div>
    )
}

export default HomePage
