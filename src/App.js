import "./App.css"
import {useState} from "react"
import Select from './components/common/Select';

const App = () => {

  const [profileDetails, setProfileDetails] =  useState({})
  const [selectedGender, setSelectedGender] = useState('any')
  const [selectedNationality, setNationality] = useState('any')

  const nationalities = ['us', 'in'];

  const getProfileDetails = async () => {
    console.log("clicked")
    const profileDetailsResponse = await fetch(`http://localhost:3005/?gender=${selectedGender}&nat=${selectedNationality}`)
    const profileDetailsResponseJson = await profileDetailsResponse.json()
    setProfileDetails(profileDetailsResponseJson)
  }

  return (
    <>
    <h1>Hey Welcome!</h1>
    <div className="controls">
          <select onChange={e => setSelectedGender(e.target.value)}>
            <option value="any">Any</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <Select 
            options={nationalities} 
            value={selectedNationality} 
            onChange={e => setNationality(e.target.value)} 
          />
          <button onClick={getProfileDetails}>Get Random User</button>
    </div>
    <div className="home-container">
      <div className="profile-card">
        {profileDetails.name && (
          <>
            <h2>User Profile</h2>
            <div className="profile-image">
              <img src={profileDetails.picture} alt="Profile" />
            </div>
            <div className="profile-info">
              <p><strong>Name:</strong> {profileDetails.name}</p>
              <p><strong>Age:</strong> {profileDetails.age}</p>
              <p><strong>Location:</strong> {profileDetails.location?.city}, {profileDetails.location?.country}</p>
              <p><strong>Nationality:</strong> {profileDetails.nationality}</p>
              <p><strong>Email:</strong> {profileDetails.email}</p>
              <p><strong>Loan Offer:</strong> {profileDetails.eligibility}</p>
            </div>
          </>
        )}
      </div>
    </div>
    </>
  )
}

export default App