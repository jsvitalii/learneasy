import React from 'react';
import { useForm } from 'react-hook-form';
import './AddCourse.scss';

const AddCourse = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch(`http://localhost:5000/addCourse`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert('Курс успішно додано!');
          reset();
        }
      });
    console.log(data);
  };

  return (
    <div className="add-menu">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="form-box">
              <h4>додати курс</h4>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mb-0 text-start"
              >
                <div className="row">
                  <div className="form-group col-md-6">
                    <input
                      className="form-control"
                      defaultValue=""
                      {...register('title', { required: true })}
                      type="text"
                      placeholder="Назва курсу"
                    />
                    {errors.title && (
                      <span className="error">назва обов'язкова</span>
                    )}
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      className="form-control"
                      defaultValue=""
                      {...register('duration', { required: true })}
                      type="text"
                      placeholder="Тривалість курсу"
                    />
                    {errors.duration && (
                      <span className="error">тривалість обов'язкова</span>
                    )}
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      className="form-control"
                      defaultValue=""
                      {...register('lesson', { required: true })}
                      type="number"
                      placeholder="Кількість уроків"
                    />
                    {errors.lesson && (
                      <span className="error">
                        кількість уроків обов'язкова
                      </span>
                    )}
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      className="form-control"
                      defaultValue=""
                      {...register('price', { required: true })}
                      type="number"
                      placeholder="Ціна"
                    />
                    {errors.price && (
                      <span className="error">ціна обов'язвкова</span>
                    )}
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      className="form-control"
                      defaultValue=""
                      {...register('image', { required: true })}
                      type="text"
                      placeholder="Лінк на зображення"
                    />
                    {errors.image && (
                      <span className="error">
                        лінк на зображення обов'язковий
                      </span>
                    )}
                  </div>
                  <div className="form-group col-md-6">
                    <select
                      className="form-control"
                      defaultValue=""
                      placeholder="Мова курсу"
                      {...register('language', { required: true })}
                    >
                      <option value="Українська">Українська</option>
                      <option value="English">English</option>
                    </select>
                    {errors.language && (
                      <span className="error">Мова обов'язвкова</span>
                    )}
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      className="form-control"
                      defaultValue=""
                      {...register('instructor', { required: true })}
                      type="text"
                      placeholder="Ім'я автора"
                    />
                    {errors.instructor && (
                      <span className="error">ім'я автора обов'язкове</span>
                    )}
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      className="form-control"
                      defaultValue=""
                      {...register('instructorImage', {
                        required: true,
                      })}
                      type="text"
                      placeholder="Лінк на фото автора"
                    />
                    {errors.instructorImage && (
                      <span className="error">фото автора обов'язкове</span>
                    )}
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      className="form-control"
                      defaultValue=""
                      {...register('category')}
                      type="text"
                      placeholder="Категорія"
                    />
                  </div>
                  <div className="form-group col-12">
                    <textarea
                      cols="30"
                      rows="10"
                      className="form-control text-area"
                      defaultValue=""
                      {...register('description', {
                        required: true,
                      })}
                      type="text"
                      placeholder="Опис"
                    />
                    {errors.description && (
                      <span className="error">опис обов'язковий</span>
                    )}
                  </div>
                </div>
                <button type="submit" className="btn-black">
                  Додати
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCourse;
