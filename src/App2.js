import React from 'react'
import { Drawer } from '@mui/material'

const drawerHeight = 100

const App2 = () => {

  return (
    <div>
        <Drawer
        sx={{
            height: drawerHeight,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              height: drawerHeight,
              boxSizing: 'border-box',
            },
          }}
        variant='permanent'
        anchor='top'
        >
            <div>
                Lol
            </div>
        </Drawer>
    </div>
  )
}

export default App2