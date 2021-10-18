import { useState, useEffect } from "react";

function Coffee() {
    // creat a state variable to hold our coffee list 
    const [coffeeList, setCoffeeList] = useState()

    const [temperature, setTemperature] = useState('hot')
    // create a useEffect to get our coffee list
    useEffect(() => {
        fetch(`https://api.sampleapis.com/coffee/${temperature}`)
        .then(res => res.json())
        .then(data => setCoffeeList(data))
        .catch(err => alert(err))
    }, [temperature])

    return (
    <>
        <h1>Coffee</h1>
        <button onClick={() => setTemperature('hot')}>HOT</button>&nbsp;
        <button onClick={() => setTemperature('iced')}>ICED</button>
        {!coffeeList
            ? <h2>Loading...</h2>
            : coffeeList.map(item => {
            return <h2 key={item.id}>{item.title}</h2>
            })
        }
    </>
    )
}

export default Coffee