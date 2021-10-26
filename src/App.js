import React, { useState } from 'react';
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
  gridClasses,
} from '@mui/x-data-grid';

const GridToolbar = () => (
  <GridToolbarContainer className={gridClasses.toolbarContainer}>
    <GridToolbarExport />
  </GridToolbarContainer>
);

const data = [
  {
    id: '1',
    descripcion: 'Lead',
    tipo: 'Libro Impreso',
    editorial: 'AMCO',
    precio: '145.00',
  },
  {
    id: '2',
    descripcion: 'Lenguaje I z - (EI Hogar que Queremos)',
    tipo: 'Libro Impreso',
    editorial: 'Santillana',
    precio: '23.05',
  },
  {
    id: '3',
    descripcion: 'Oxford Int. Primary Science WB I',
    tipo: 'Libro Impreso',
    editorial: 'OUP',
    precio: '15.10',
  },
  {
    id: '4',
    descripcion: 'Caligrafia I z - (Nueva Ediciön)',
    tipo: 'Libro Impreso',
    editorial: 'Santillana',
    precio: '15.40',
  },
  {
    id: '5',
    descripcion: 'Antes de mi',
    tipo: 'Novela Impresa',
    editorial: 'Santillana',
    precio: '6.60',
  },
  {
    id: '6',
    descripcion: 'Ciencias Scziales IZ - (EI Hogar que Oueremos)',
    tipo: 'Libro Impreso',
    editorial: 'Santillana',
    precio: '21.95',
  },
  {
    id: '7',
    descripcion: 'Matemåtica I z - (EI Hogar que Queremcs)',
    tipo: 'Libro Impreso',
    editorial: 'Santillana',
    precio: '23.05',
  },
  {
    id: '8',
    descripcion: 'La princesa del agua',
    tipo: 'Novela Impresa',
    editorial: 'Santillana',
    precio: '7.15',
  },
  {
    id: '9',
    descripcion: 'Oxford Int. Primary Science SE I',
    tipo: 'Libro Impreso',
    editorial: 'OUP',
    precio: '31.60',
  },
  {
    id: '10',
    descripcion: 'ACCELIUM',
    tipo: 'Programa',
    editorial: 'Programa',
    precio: '35.00',
  },
];

function VerPedidos() {
  const [pageSize, setPageSize] = useState(10);
  // const [selectionModel, setSelectionModel] = useState([]);

  // const data = JSON.parse(window.localStorage.getItem("verpedidos"));
  // let librosData = data[0].data;
  let librosData = data;

  const columns = [
    { field: 'id', hide: true },
    { field: 'descripcion', headerName: 'Descripción', width: 450 },

    { field: 'tipo', headerName: 'Tipo', width: 150 },

    { field: 'editorial', headerName: 'Editorial', width: 100 },

    {
      field: 'precio',
      headerName: 'Precio',
      width: 100,
      align: 'right',
      sortable: false,
      valueFormatter: (params) => {
        return `$${params.value}`;
      },
    },
  ];

  return (
    <DataGrid
      rows={librosData}
      columns={columns}
      autoHeight
      pageSize={pageSize}
      onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
      rowsPerPageOptions={[5, 10, 20]}
      components={{
        Toolbar: GridToolbar,
      }}
    />
  );
}

export default VerPedidos;
