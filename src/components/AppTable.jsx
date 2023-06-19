import React from "react";

const AppTable = ({ a1, b1, c1, d1, data, a2, b2, c2, d2 }) => {
  return (
    <table className="table table-striped table-bordered">
      <thead>
        <tr>
          {a1 && <th scope="col">{a1.toUpperCase()}</th>}
          {b1 && <th scope="col">{b1.toUpperCase()}</th>}
          {c1 && <th scope="col">{c1.toUpperCase()}</th>}
          {d1 && <th scope="col">{d1.toUpperCase()}</th>}
        </tr>
      </thead>
      <tbody>
        {data.map((d, i) => {
          return (
            <tr key={!d.id ? i + 1 : d[a1]}>
              {a1 && <th scope="row">{!d.id ? i + 1 : d[a1]}</th>}
              {b1 && <td>{!d.id ? d : d[b1]}</td>}
              {c1 && <td>{d[c1]}</td>}
              {d1 && <td>{d[d1]}</td>}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default AppTable;
