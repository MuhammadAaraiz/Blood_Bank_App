import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../App.css'
export const Home = () => {
  const navigate = useNavigate()
  const Recipients_Page = () => {
    navigate('/recipient')
  }
  const Donors_Page = () => {
    navigate('/donor')
  }
  const Donors_List_Page = () => {
    navigate('/donors_list')
  }
  const Recipients_List_Page = () => {
    navigate('/recipients_list')

  }
  return (
    <>
      <div style={{ display: 'flex' }}>
        <img width={'50%'} src="https://img.freepik.com/free-vector/happy-world-blood-donor-day-red-grey-yellow-background-social-media-design-banner-free-vector_1340-21612.jpg" alt="" />
        <img width={'50%'} src="https://www.primedeq.com/blog/wp-content/uploads/2020/01/blood-bank.jpg" alt="" />
      </div>
      <br />
      <div style={{ backgroundColor: 'aliceblue', textAlign: "center", display: 'flex', justifyContent: 'space-around' }}>
        <div style={{ border: '1px solid orangered', padding: "10px", borderRadius: '20px', borderColor: 'orangered' }}>
          <h1 > Are You A Donor Looking For <br /> Recipient
            <br /><br /> <button className='Home_Page_btn' onClick={Donors_Page} style={{ padding: '10px', fontSize: '15px', border: ' 2px solid orangered', borderRadius: '10px', borderColor: 'orangered' }}>Click Here To Donate</button>
          </h1>
        </div>
        <div style={{ border: '1px solid orangered', padding: "10px", borderRadius: '20px', borderColor: 'orangered' }}>
          <h1 > Are You A Recipient Looking For <br /> Donor
            <br /><br /> <button className='Home_Page_btn' onClick={Recipients_Page} style={{ padding: '10px', fontSize: '15px', border: ' 2px solid orangered', borderRadius: '10px', borderColor: 'orangered' }}>Click Here To Recieve</button>
          </h1>
        </div>

      </div>
      <br /><br />
      <div style={{ backgroundColor: 'aliceblue', textAlign: "center", display: 'flex', justifyContent: 'space-around' }}>
        <div style={{ border: '1px solid orangered', padding: "10px", borderRadius: '20px', borderColor: 'orangered' }}>
          <h1 > Click Here to see all Donor,s <br /> Details
            <br /><br /> <button className='Home_Page_btn' onClick={Donors_List_Page} style={{ padding: '10px', fontSize: '15px', border: ' 2px solid orangered', borderRadius: '10px', borderColor: 'orangered' }}>See Details</button>
          </h1>
        </div>
        <div style={{ border: '1px solid orangered', padding: "10px", borderRadius: '20px', borderColor: 'orangered' }}>
          <h1>  Click Here to see all Recipient,s <br /> Details
            <br /><br /> <button className='Home_Page_btn' onClick={Recipients_List_Page} style={{ padding: '10px', fontSize: '15px', border: ' 2px solid orangered', borderRadius: '10px', borderColor: 'orangered' }}>See Details</button>
          </h1>
        </div>
      </div>
    </>
  )
}
