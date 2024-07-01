import React from 'react'

import { Vortex } from 'react-loader-spinner'

const Spinner = () => {
  return (
    <Vortex
        visible={true}
        height="140"
        width="140"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
        />
  )
}

export default Spinner