import React,{useEffect,useState} from 'react'
import { getServerData } from '../../helper/helper'
const Resulttable = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        getServerData('http://localhost:1110/result', (res) => {
            setData(res)
        })
    })


  return (
    <div class="container card">
      <table class="table">
  <thead>
    <tr>
      <td>Name</td>
      <td>Attempts</td>
      <td>Earn points</td>
      <td>Result</td>
    </tr>
  </thead>
  <tbody>
        { !data ?? <div>No Data Found </div>}
            {
              data.map((v, i) => (
                <tr key={i}>
                    <td>{v?.username || ''}</td>
                    <td>{v?.attempts || 0}</td>
                    <td>{v?.points || 0}</td>
                    <td>{v?.achived || ""}</td>
                    </tr>
                    ))
                }
                
    </tbody>
</table>
    </div>
  )
}

export default Resulttable
