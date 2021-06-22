// Table.js
// Defines table html and helpers

// imports
import React from 'react'
import { useTable } from 'react-table'
import styled from 'styled-components'
import './stylesheets/Table.css'

class Table extends React.Component {

    // static column design

    constructor(props) {
        super(props)
        this.state = {
            table: props.table
        }
        console.log(props.table)
        

    }

    render() {
        return <BuiltTable table={this.state.table} theme={this.props.theme}/>
    }
}

const BuiltTable = (props) => {
    
    const tableData = props.table
    const classes = props.theme === 'light' ? 'table light' : 'table dark';
    var total = 0;
    console.log(classes)
    // standard static headers
    const columns = React.useMemo(
        () => [
            {
                Header: 'Item',
                accessor: 'name',
            },
            {
                Header: 'Quantity',
                accessor: 'quantity',
            },
            {
                Header: 'Price',
                accessor: 'buyprice',
            },
            {
                Header: 'Total',
                accessor: 'totalprice',
            },
        ],
        []
    )

    var displayData = []

    for (var i = 0; i < tableData.length; i++) {

        var row = {}

        row['totalprice'] = Math.round(tableData[i]['quantity'] * tableData[i]['buyprice']).toLocaleString() + ' ISK';
        row['buyprice'] = Math.round(tableData[i]['buyprice']).toLocaleString() + ' ISK';
        row['quantity'] = tableData[i]['quantity'].toLocaleString();
        row['name'] = tableData[i]['name'];
        total += Math.round(tableData[i]['quantity'] * tableData[i]['buyprice']);
        displayData.push(row);
    }



    const data = React.useMemo(
        () => displayData, []
    )

    const tableInstance = useTable({ columns, data })

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance

    return (
        // apply the table props
        <table {...getTableProps()} className={ classes }>
          <thead className='sticky'>
            {// Loop over the header rows
            headerGroups.map(headerGroup => (
              // Apply the header row props
              <tr {...headerGroup.getHeaderGroupProps()}>
                {// Loop over the headers in each row
                headerGroup.headers.map(column => (
                  // Apply the header cell props
                  <th {...column.getHeaderProps()}>
                    {// Render the header
                    column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          {/* Apply the table body props */}
          <tbody {...getTableBodyProps()}>
            {// Loop over the table rows
            rows.map(row => {
              // Prepare the row for display
              prepareRow(row)
              return (
                // Apply the row props
                <tr {...row.getRowProps()}>
                  {// Loop over the rows cells
                  row.cells.map(cell => {
                    // Apply the cell props
                    return (
                      <td {...cell.getCellProps()}>
                        {// Render the cell contents
                        cell.render('Cell')}
                      </td>
                    )
                  })}
                </tr>
              )
            })}

          </tbody>
          <tfoot>
            <tr className='footer'>
                    <td className='total-header'> Total </td>
                    <td className='total-sum'> {total.toLocaleString()} ISK </td>
            </tr>
          </tfoot>
        </table>
    )
     


}

export default Table;