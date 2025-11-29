import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WEDGE_ARROW_DASHED = {
  _style: {
    dependency:
      'shape=mxgraph.arrows2.wedgeArrowDashed2;html=1;bendable=0;startWidth=50;stepSize=15;',
  },
}

export function WedgeArrowDashed(props: NodeProps) {
  return (
    <Dependency {...props} _style={extendStyle(props, WEDGE_ARROW_DASHED)} />
  )
}
