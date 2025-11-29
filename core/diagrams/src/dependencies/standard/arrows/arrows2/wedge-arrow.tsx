import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WEDGE_ARROW = {
  _style: {
    dependency:
      'shape=mxgraph.arrows2.wedgeArrow;html=1;bendable=0;startWidth=50;fillColor=strokeColor;defaultFillColor=invert;defaultGradientColor=invert;',
  },
}

export function WedgeArrow(props: NodeProps) {
  return <Dependency {...props} _style={extendStyle(props, WEDGE_ARROW)} />
}
