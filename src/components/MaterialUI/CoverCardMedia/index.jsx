/* eslint-disable no-tabs */
import React from 'react'
import Box from '@material-ui/core/Box'
import CardMedia from '@material-ui/core/CardMedia'
import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover'

const CoverCardMedia = () => {
  const styles = useCoverCardMediaStyles()
  return (
    <Box position={'relative'} width={'100%'} height={'100%'} p={2}>
      <CardMedia
        // component={'img'} // add this line to use <img />
        // image={"src"}
        classes={styles}
      />
      <Box position={'relative'}>
        <h3>Placeholder</h3>
        <p>To show that the image is a cover.</p>
      </Box>
    </Box>
  )
}

export default CoverCardMedia
