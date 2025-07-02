import React, { useEffect, useState } from "react";

import axios from "axios";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios
      .get("https://zerodha-clone-backend-90ba.onrender.com/allOrders")
      .then((res) => {
        // console.log(res.data);
        setAllOrders(res.data);
      });
  }, []);
  return (
    <div className="orders">
      <h3 className="title">Orders ({allOrders.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>

            <th>Price</th>
          </tr>
          {allOrders.map((stock, index) => {
            // const curValue = stock.price * stock.qty;
            // const isProfit = curValue - stock.qty * stock.price;
            // const profClass = isProfit ? "profit" : "loss";
            // const dayClass = stock.isLoss ? "loss" : "profit";
            return (
              <tbody key={index}>
                <tr>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  {/* <td>{stock.qty.toFixed(2)}</td> */}

                  <td>{stock.price}</td>
                  {/* <td>{stock.price.toFixed(2)}</td> */}
                  {/* <td className={profClass}>
                  {(curValue - stock.avg * stock.qty).toFixed(2)}
                </td>
                <td className={dayClass}>{stock.day}</td> */}
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Orders;
