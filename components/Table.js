import * as React from "react";
import { DataTable } from "react-native-paper";

const Table = () => {
  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Category</DataTable.Title>
        <DataTable.Title>1Y</DataTable.Title>
        <DataTable.Title>3Y</DataTable.Title>
        <DataTable.Title>5Y</DataTable.Title>
      </DataTable.Header>

      <DataTable.Row>
        <DataTable.Cell>Returns</DataTable.Cell>
        <DataTable.Cell>56.6%</DataTable.Cell>
        <DataTable.Cell>22.6%</DataTable.Cell>
        <DataTable.Cell>19.5%</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Average</DataTable.Cell>
        <DataTable.Cell>48.0%</DataTable.Cell>
        <DataTable.Cell>13.9%</DataTable.Cell>
        <DataTable.Cell>14.2%</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Rank</DataTable.Cell>
        <DataTable.Cell>53</DataTable.Cell>
        <DataTable.Cell>3</DataTable.Cell>
        <DataTable.Cell>1</DataTable.Cell>
      </DataTable.Row>
    </DataTable>
  );
};

export default Table;
