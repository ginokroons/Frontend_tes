import { Box, Card, CircularProgress, TableCell, TableRow } from '@mui/material'
import React from 'react'

const ScanResultCard = ({results, fileId}) => {
  console.log(results.filter(data=>data.ID===parseInt(fileId)),'haii')


  return (
    <Box>
      <Card sx={{ width: '100%', height: '300px', mt: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {results.filter((result) => result.ID === parseInt(fileId)).map(filteredresult => (
            console.log(filteredresult),
              <TableRow
                key={filteredresult.ID}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                {filteredresult.pathfile}
                </TableCell>
                <TableCell>{filteredresult.pathjson}</TableCell>
              </TableRow>
            ))}
            <CircularProgress size={80}/>
      </Card>
    </Box>
  )
}

export default ScanResultCard