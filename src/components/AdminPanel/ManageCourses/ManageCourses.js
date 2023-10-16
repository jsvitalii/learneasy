import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './ManageCourses.scss';
import useCourses from '../../../hooks/useCourses';

const ManageCourses = () => {
  const [menus, _, setMenus] = useCourses();

  const handleDelete = (id) => {
    const proceed = window.confirm('Ви впевнені що хочете видалити?');

    if (proceed) {
      fetch(`https://learneasy.onrender.com/deleteCourse/${id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            const remaining = menus.filter((menu) => menu._id !== id);
            setMenus(remaining);
          }
        });
    }
  };

  return (
    <div className="manage-menus">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="menu-table">
              <h4>Курси</h4>
              <table className="table mb-0">
                <thead>
                  <tr>
                    <th scope="col">Зображення</th>
                    <th scope="col">Назва</th>
                    <th scope="col">Автор</th>
                    <th scope="col">Ціна</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {menus.map((menu) => (
                    <tr key={menu._id}>
                      <td>
                        <img className="img-fluid" src={menu.image} alt="" />
                      </td>
                      <td>
                        <p>{menu.title}</p>
                      </td>
                      <td>
                        <p>{menu.instructor}</p>
                      </td>
                      <td>
                        <p>${menu.price}</p>
                      </td>
                      <td>
                        <p>
                          <button
                            onClick={() => handleDelete(menu._id)}
                            className="btn-black delete"
                          >
                            <FontAwesomeIcon
                              icon={faTrashAlt}
                              className="fa-icon"
                            />
                          </button>
                        </p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageCourses;
