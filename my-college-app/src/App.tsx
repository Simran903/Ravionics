import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CollegeList from './components/CollegeList';
import CourseDetails from './components/CourseDetails';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<CollegeList />} />
        <Route path='/colleges/:collegeId/courses' element={<CourseDetails />} />
      </Routes>
    </Router>
  )
}

export default App
