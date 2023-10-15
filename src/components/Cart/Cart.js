import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './Cart.scss';
import useAuth from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';

const Cart = () => {
  const { user } = useAuth();
  const { handleSubmit, reset } = useForm();
  const [cartOrders, setCartOrders] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:5000/cartOrders/${user.email}`)
      .then((res) => res.json())
      .then((data) => setCartOrders(data));
  }, [user]);

  useEffect(() => {
    if (cartOrders.length) {
      const price = cartOrders.reduce(
        (prev, order) =>
          prev + parseInt(order.price) * parseInt(order.quantity),
        0,
      );
      const quantity = cartOrders.reduce(
        (prev, order) => prev + parseInt(order.quantity),
        0,
      );
      setSubTotal(price);
      setTotalQuantity(quantity);
    }
  }, [cartOrders]);

  const handleDelete = (id) => {
    const proceed = window.confirm('Ви впевнені, що хочете видалити?');

    if (proceed) {
      fetch(`http://localhost:5000/deleteCartOrder/${id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            const remaining = cartOrders.filter((order) => order._id !== id);
            setCartOrders(remaining);
            setSubTotal(0);
            setTotalQuantity(0);
          }
        });
    }
  };

  const handleDeleteAll = (email) => {
    fetch(`http://localhost:5000/deleteAllCartOrder/${email}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          const remaining = cartOrders.filter((order) => order.email !== email);
          setCartOrders(remaining);
        }
      });
  };

  const onSubmit = (data) => {
    data.status = 'Pending';
    data.date = new Date().toDateString();
    data.price = subTotal;
    data.quantity = totalQuantity;

    if (cartOrders.length) {
      fetch(`http://localhost:5000/addOrder`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.insertedId && cartOrders.length) {
            alert('Замовлення відправлено');
            reset();
            setCartOrders([]);
            setSubTotal(0);
            setTotalQuantity(0);
            handleDeleteAll(user.email);
          }
        });
    } else {
      alert('Кошик порожній');
    }
  };

  return (
    <div className="cart-section">
      <div className="container">
        <div className="row">
          <h4 className="">Ваше Замовлення</h4>
          <div className="col-lg-8">
            {cartOrders.map((order) => (
              <div key={order._id} className="course-list">
                <img className="img-fluid" src={order.image} alt="" />
                <h5 className="title mb-0">{order.title}</h5>
                <p className="price mb-0">${order.price}</p>
                <button
                  onClick={() => handleDelete(order._id)}
                  className="btn-black delete"
                >
                  <FontAwesomeIcon icon={faTrashAlt} className="fa-icon" />
                </button>
              </div>
            ))}
            {cartOrders.length === 0 && (
              <p className="failure-alert">Ваш кошик порожній</p>
            )}
          </div>
          <div className="col-lg-4 ps-lg-5 mt-5 mt-lg-0">
            <div className="estimation-box">
              <h4>Сума кошика</h4>
              <ul>
                <li>
                  Курсів <span>{totalQuantity}</span>
                </li>
                <li className="total">
                  Сума <span>${subTotal}</span>
                </li>
              </ul>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mb-0 text-start"
              >
                <button type="submit" className="btn-black">
                  Оформити замовлення
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
