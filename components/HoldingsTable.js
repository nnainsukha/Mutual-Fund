import * as React from "react";
import { DataTable } from "react-native-paper";

const Table = () => {
  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Holdings</DataTable.Title>
        <DataTable.Title>Assets</DataTable.Title>
      </DataTable.Header>

      <DataTable.Row>
        <DataTable.Cell>Infosys Ltd</DataTable.Cell>
        <DataTable.Cell>17.23%</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Tata Consultancy Services</DataTable.Cell>
        <DataTable.Cell>10.31%</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>HCL Technologies Ltd</DataTable.Cell>
        <DataTable.Cell>9.74%</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Persistent Systems Ltd</DataTable.Cell>
        <DataTable.Cell>4.44%</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Bharti Airtel Ltd</DataTable.Cell>
        <DataTable.Cell>4.24%</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Cyient Ltd</DataTable.Cell>
        <DataTable.Cell>3.17%</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Coforge Ltd</DataTable.Cell>
        <DataTable.Cell>2.97%</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>eClerx Services Ltd</DataTable.Cell>
        <DataTable.Cell>2.48%</DataTable.Cell>
      </DataTable.Row>
    </DataTable>
  );
};

export default Table;
