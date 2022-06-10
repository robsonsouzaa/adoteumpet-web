import { NextPage } from 'next';
import Title from '../../ui/components/Title/Title';
import { 
  Paper, 
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow } from '@mui/material';
import { useReport } from '../../data/hooks/pages/pets/useReport';

const Report: NextPage = () => {
  const { reportList } = useReport();

  return(
    <>
      <Title 
        title={'Relatório de Adoção'}
        subtitle={'Veja a lista de pets adotados'}
      />
      <TableContainer
        component={Paper}
        sx={{maxWidth: 830, mx: 'auto', p: { sx: 3, md: 5 }}}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Pet</TableCell>
              <TableCell>E-mail</TableCell>
              <TableCell align={'right'}>Valor Mensal</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { reportList.map((report) => (
              <TableRow key={report.id}>
                <TableCell>{report.pet.name}</TableCell>
                <TableCell>{report.email}</TableCell>
                <TableCell align={'right'}>{report.ammount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default Report;