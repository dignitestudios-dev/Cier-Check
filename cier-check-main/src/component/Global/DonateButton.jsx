import axios from 'axios'
import React, { useState } from 'react'

const DonateButton = () => {
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
        <button onClick={buyfunction} className="  rounded-lg  btn  mt-5">
            {loading ? <div className="loader z-10"></div> : 'Donate Now'}
        </button>
    )
}

export default DonateButton