
import Navbar from "./Navbar"; 
import "./App.css";
function App() {
  

  return (
    <div>
       <Navbar/>
       <div className="dashboard">

        <h1>Student Dashboard</h1>
        <p>Welcome to your dashboard!</p>

        <div className="cards">

          <div className="card">
            <h3>Total Students</h3>
            <h2>120</h2>
          </div>

          <div className="card">
            <h3>Present Today</h3>
            <h2>100</h2>
          </div>

          <div className="card">
            <h3>Absent Today</h3>
            <h2>20</h2>
          </div>

        </div>

        <h2>Student Information</h2>

        <div className="student-info-container">
        <div className="student-card">
        <p>Name: Abdul | Department: CSE | Year: 3rd Year</p>
        </div>

        <div className="student-card">
        <p>Name: Fawaz | Department: IT | Year: 3rd Year</p>
        </div>

        <div className="student-card">
        <p>Name: Ibrahim | Department: AIDS | Year: 3rd Year</p>
        </div>
        </div>


      </div>
    </div>  
  )
}

export default App
