import React from 'react'
import { ThemeProvider } from 'styled-components'
import NoSsr from '@material-ui/core/NoSsr'
import { createMuiTheme } from '@material-ui/core/styles'
// import { palette, spacing, typography } from '@material-ui/system'

import Box from '@material-ui/core/Box'

// const Box = styled.div`${palette}${spacing}${typography}`
// or import Box from '@material-ui/core/Box';

const theme = createMuiTheme()

export default function Demo() {
  return (
    <NoSsr>
      <ThemeProvider theme={theme}>
        <Box
          color="primary.main"
          bgcolor="background.paper"
          fontFamily="h6.fontFamily"
          fontSize={{ xs: 'h6.fontSize', sm: 'h4.fontSize', md: 'h3.fontSize' }}
          p={{ xs: 2, sm: 3, md: 4 }}
        >
          Tecnología futurista
        </Box>
      </ThemeProvider>
    </NoSsr>
  )
}
