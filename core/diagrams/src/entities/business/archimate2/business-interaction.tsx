import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BUSINESS_INTERACTION = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ffff99;shape=mxgraph.archimate.business;busType=interaction',
  },
  _width: 100,
  _height: 75,
}

export function BusinessInteraction(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BUSINESS_INTERACTION)} />
}
