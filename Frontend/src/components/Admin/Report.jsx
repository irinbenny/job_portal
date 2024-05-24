import React from 'react';
import SideBar from './SideBar'

const Report = ({ data }) => {
  return (
    <div>
      <h2>Sample Report</h2>
      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Activity</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.user}</td>
              <td>{item.activity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Report;
