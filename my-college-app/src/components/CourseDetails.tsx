import { useEffect, useState, FC } from 'react';
import axios from '../api/axios';
import { useParams } from 'react-router-dom';

interface Course {
  name: string;
  credits: number;
}

const CourseDetails: FC = () => {
  const { collegeId } = useParams<{ collegeId: string }>();
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const fetchCourses = async (): Promise<void> => {
      try {
        const response = await axios.get<Course[]>("/courses");
        setCourses(response.data);
      } catch (error) {
        console.log("Error Fetching Courses:", error);
      }
    }

    fetchCourses();
  }, [collegeId]);

  return (
    <div className="">
      <h1>Course Details</h1>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>{course.name} - {course.credits} Credits</li>
        ))}
      </ul>
    </div>
  );
}

export default CourseDetails;