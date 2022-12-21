import { Box } from '@mui/system'
import React from 'react'

const ScanResultCard = ({result, fileId}) => {
  return (
    <Box>
      <Card sx={{ width: '100%', height: '300px', mt: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {result.filter((file) => file.ID === parseInt(fileId)).map(filteredfile => (
            console.log(filteredfile),
              <TableRow
                key={filteredfile.ID}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                {filteredfile.pathfile}
                </TableCell>
                <TableCell>{filteredfile.pathjson}</TableCell>
              </TableRow>
            ))}
            <CircularProgress size={80}/>
      </Card>
    </Box>
  )
}

export default ScanResultCard