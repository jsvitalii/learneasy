import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './ManageOrders.scss';

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch('https://learneasy.onrender.com/orders')
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const handleUpdate = (id) => {
    const update = async () => {
      await fetch(`https://learneasy.onrender.com/orders/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orders),
      });

      await fetch('https://learneasy.onrender.com/orders')
        .then((res) => res.json())
        .then((data) => setOrders(data))
        .then(() => alert('Виконано'));
    };

    update();
  };

  const handleDelete = (id) => {
    const proceed = window.confirm('Ви впевнені що хочете видалити?');
    if (proceed) {
      fetch(`https://learneasy.onrender.com/deleteOrder/${id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            const remaining = orders.filter((menu) => menu._id !== id);
            setOrders(remaining);
          }
        });
    }
  };

  return (
    <div className="manage-menus manage-orders">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="menu-table">
              <h4>замовлення</h4>
              <table className="table mb-0">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Дата замовлення</th>
                    <th scope="col">Кількість</th>
                    <th scope="col">Сума</th>
                    <th scope="col">Статус</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order._id}>
                      <td>
                        <p>{order._id}</p>
                      </td>
                      <td>
                        <p>{order.date}</p>
                      </td>
                      <td>
                        <p>{order.quantity}</p>
                      </td>
                      <td>
                        <p>${order.price}</p>
                      </td>
                      <td>
                        <p>
                          {order.status === 'Pending' ? (
                            <button
                              onClick={() => handleUpdate(order._id)}
                              className="btn-black action"
                            >
                              Виконати
                            </button>
                          ) : (
                            <button
                              className="btn-black action delivered"
                              disabled
                            >
                              Виконано
                            </button>
                          )}
                        </p>
                      </td>
                      <td>
                        <p>
                          <button
                            onClick={() => handleDelete(order._id)}
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
                  {orders.length === 0 && (
                    <tr>
                      <td colSpan="6">
                        <p className="mb-0">Замовлення відсутні</p>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageOrders;
