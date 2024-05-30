
import React, { useContext } from "react";

import { increment, decrement } from "../redux/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { DataContext } from "../contextData/UserContext";

function Cards() {
  let { data } = useContext(DataContext);
  let dispatch = useDispatch();
  let quantities = useSelector((state) => state.Card.quantities);

  let increase = (id) => {
    dispatch(increment({ id }));
  };

  let decrease = (id) => {
    dispatch(decrement({ id }));
  };

  return (
    <>
      <div className="container ">
        {data.map((e, i) => {
          const discount = Math.round(e.price * (e.discountPercentage / 100));
          const total = quantities[e.id] || 0;

          return (
            <div
              className="Card mb-5"
              style={{ minWidth: "100%", maxWidth: "540px" }}
              key={i}
            >
              <div className="row g-0">
                <div className="col-md-3 image">
                  <img
                    src={e.image}
                    className="img-fluid rounded-start cardImage p-5"
                    alt="product image..."
                  />
                </div>
                <div className="col-md-9">
                  <div className="cardBody px-3">
                    <div className="top">
                      <div className="head d-flex justify-content-between align-item-center">
                        <h1>{e.title}</h1>
                        <h2>${e.price}</h2>
                      </div>
                      <div className="d-flex justify-content-between align-item-center">
                        <b>Brand:{e.brand}</b>
                        <p style={{ color: "blue" }}>
                          Discount:{e.discountPercentage}%
                        </p>
                      </div>
                    </div>
                    <p className="card-value">{e.description}</p>
                    <div className="button d-flex justify-content-between align-item-center">
                      <p className="card-value">Rating:{e.rating}/5</p>
                      <div className="button">
                        <Button
                          variant="outline-danger"
                          onClick={() => decrease(e.id)}
                        >
                          -
                        </Button>
                        <span style={{ margin: "5px" }}>{total}</span>
                        <Button
                          variant="outline-success"
                          onClick={() => increase(e.id)}
                        >
                          +
                        </Button>
                      </div>
                    </div>
                    <div className="bottom">
                      <div className="d-flex justify-content-between align-items-center">
                        Original Price for 1 item:
                        <p className="card-text">${e.price} </p>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        Discount Amount :
                        <p className="card-text text-success"> - ${discount}</p>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        Final Price:
                        <p className="card-text">${e.price - discount}</p>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        Total Amount :
                        <h5 className="card-text">${total * e.price}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Cards;