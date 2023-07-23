import React, {useState, useEffect} from "react";

const Api_Url = "https://dog.ceo/api/breeds/image/random"
function App(){
    const [isLoaded, setIsLoaded] = useState(true);
    const [image, setImage] = useState("")

    useEffect(() => {
        fetch(Api_Url)
        .then(res => res.json())
        .then(data => setImage(data.message))

    }, [])
    if(!isLoaded){
        return <p>Loading...</p>
    }
    return (
        <img src={image} alt="A Random Dog"/>
    )

}
export default App;