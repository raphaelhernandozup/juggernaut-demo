import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'

function Alert ({ open, handleClose }) {
  return (
    <Dialog
      keepMounted
      open={open}
      onClose={handleClose}
    >
      <DialogTitle id="alert-dialog-title">Modal Title</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Modal Content - Let Google help apps determine location.
          This means sending anonymous location data to
          Google, even when no apps are running.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Disagree
        </Button>
        <Button onClick={handleClose} color="primary" autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  )
}

Alert.defaultProps = {
  open: false
}

Alert.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func.isRequired
}

export default memo(Alert)
