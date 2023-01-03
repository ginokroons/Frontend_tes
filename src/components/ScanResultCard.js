import { Box, Card, CircularProgress, TableCell, TableRow } from '@mui/material'
import React from 'react'

const ScanResultCard = ({results, fileId}) => {
  // console.log(results.map(data=>data.ID===parseInt(fileId)),'haii')
  // console.log(results.map(result=>result.ID),'haii')
  console.log(results)

  return (
    <Box>
      <Card sx={{ width: '100%', height: '300px', mt: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {results.map(result => (
            console.log(result),
              <TableRow
                key={result.ID}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                {result.pathfile}
                </TableCell>
                <TableCell>{result.pathjson}</TableCell>
              </TableRow>
            ))}
            <CircularProgress size={80}/>
      </Card>
    </Box>
  )
}

export default ScanResultCard