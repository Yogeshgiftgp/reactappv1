import { useEffect,useState } from "react"

function Get() {
    const [data, setData]=useState([])
  
    useEffect(()=>{
      fetch("https://api.instantwebtools.net/v1/airlines").then((result)=>{
        result.json().then((resp)=>{
          setData(resp)
        })
      })
  
    },[])
  console.warn(data)
    return (
  
      <div className="App">
        <h1>Bulk Order Info</h1>
        <Table striped bordered hover variant="dark">
          <tbody>
            <tr>
              <td>ID</td>
              <td>NAME</td>
              <td>country</td>
              <td>slogan</td>
              <td>Head Quaters</td>
  
            </tr>
            {
              data.map((item, i) =>
                <tr key={i}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.country}</td>
                  <td>{item.slogan}</td>
                  <td>{item.head_quaters}</td>
                                
                </tr>
              )
            
            }
          </tbody>
        </Table>
  
      </div>
  
      
    );
  
  }

  export default Get();