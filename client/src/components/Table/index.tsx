import React from 'react';
import './Table.css';
/**
 * Interface for Table
 *
 * @interface Props
 */
interface Props {
  columns: any[];
  rows: any[];
  onEdit: (data: any) => void;
  onDelete: (userId: string) => void;
}
/**
 * Table component
 *
 * @param {Props} props Table Props
 * @returns Table
 */
const Table = (props: Props) => {

  return (
    <div className='Table-container'>
      <table className='Table-wrapper'>
        <thead>
          <tr className='Table-header-row'>
            {
              props.columns.map((column) => (
                <th className='Table-cell Table-cell-head' key={column.id}>{column.label}</th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            props.rows.map((row, rowIndex) => {
              return (
                <tr className='Table-row' key={rowIndex}>
                  {
                    props.columns.map((column, columnIndex) => {
                      let value = null;
                      if (column.id === 'name') {
                        value = `${row['firstName']} ${row['lastName']}`;
                      }
                      else {
                        value = row[column.id];
                      }
                      if (column.id === 'action') {
                        return (
                          <td className='Table-cell Table-cell-body' key={columnIndex}>
                            <span className='Table-action-cell'>
                              <a href='#' className='Table-action-link' onClick={(e) => { e.preventDefault(); props.onEdit(row) }}>Edit</a>
                              <a href='#' className='Table-action-link' onClick={(e) => { e.preventDefault(); props.onDelete(row._id) }}>Delete</a>
                            </span>
                          </td>
                        )
                      } else {
                        return (
                          <td className='Table-cell Table-cell-body' key={columnIndex}>
                            {column.format ? column.format(value) : value}
                          </td>
                        )
                      }
                    })
                  }
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default Table;
