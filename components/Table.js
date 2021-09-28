import * as React from "react";
import { DataTable } from "react-native-paper";

const Table = () => {
  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Fund Size</DataTable.Title>
        <DataTable.Title>Risk</DataTable.Title>
        <DataTable.Title numeric>Rating</DataTable.Title>
        <DataTable.Title numeric>Min SIP</DataTable.Title>
      </DataTable.Header>

      <DataTable.Row>
        <DataTable.Cell>5,037.40Cr</DataTable.Cell>
        <DataTable.Cell>Very High</DataTable.Cell>
        <DataTable.Cell numeric>5</DataTable.Cell>
        <DataTable.Cell numeric>500</DataTable.Cell>
      </DataTable.Row>
    </DataTable>
  );
};

export default Table;
