import React from "react";

const Table = ({ netIncomes }) => {

    // Calcular el promedio de ingreso neto utilizando la función reduce
    const totalIncome = netIncomes.reduce((acc, curr) => acc + curr.income, 0);
    const averageIncome = totalIncome / netIncomes.length;
  
    
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Brand Name</th>
            <th>Net Income</th>
          </tr>
        </thead>
        <tbody>
          {netIncomes.map((item, index) => (
            <tr key={index}>
              <td>{item.brand}</td>
              <td>{item.income}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Average Net Income: {averageIncome}</p>
    </div>
  );
};
  
export default Table;



  