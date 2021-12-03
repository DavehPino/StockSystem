import React, { useEffect } from "react";
import styled from "styled-components";

export const TableList = ({ getId, list, colNames }) => {
  const rowClick = (id) => {
    getId(id);
    let row;
    for (let i = 0; i <= 25; i++) {
      row = document.getElementById(i);
      if (row != null) {
        if (i == id) {
          row.style.backgroundColor = "grey";
        } else {
          row.style.backgroundColor = "rgb(236, 236, 236)";
        }
      }
    }
  };
  useEffect(() => {
    let row;
    for(let i = 0; i <= 25; i++){
      row = document.getElementById(i)
      if (row != null){
        row.style.backgroundColor = "rgb(236, 236, 236)"
      }
    }
  }, [list])

  return (
    <div style={{ width: "100%" }}>
      <Table cellSpacing="0">
        <thead style={{ width: "100%" }}>
          <tr>
            {colNames.map((headerItem, i) => {
              return <Th key={i}>{headerItem.toUpperCase()}</Th>;
            })}
          </tr>
        </thead>
        <tbody style={{ width: "100%" }}>
          {Object.values(list).map((obj, i) => {
            return (
              <Tr
                key={i}
                onClick={() => {
                  rowClick(obj.id);
                }}
                id={obj.id}
              >
                {Object.values(obj).map((value, j) => {
                  return <td key={j}>{value}</td>;
                })}
              </Tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

const Tr = styled.tr`
  cursor: pointer;
  text-align: center;
  &:hover {
    background-color: grey;
  }
`;
const Th = styled.th`
  color: red;
  border: 1px solid grey;
  border-top: 0px;
  padding: 3px 0;
  background-color: rgba(209, 213, 219, var(--tw-bg-opacity));
`;

const Table = styled.table`
  height: auto;
  width: 100%;
  padding: 5px 10px;
`;
