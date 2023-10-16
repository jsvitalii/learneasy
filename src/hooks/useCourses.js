import { useEffect, useState } from 'react';

const useCourses = () => {
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch('https://learneasy.onrender.com/courses')
      .then((res) => res.json())
      .then((data) => setMenus(data))
      .then((data) => setLoading(false));
  }, []);

  return [menus, loading];
};

export default useCourses;
