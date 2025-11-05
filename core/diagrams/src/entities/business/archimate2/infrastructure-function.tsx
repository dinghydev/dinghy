import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INFRASTRUCTURE_FUNCTION = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#99ff99;shape=mxgraph.archimate.business;busType=function',
  },
  _width: 100,
  _height: 75,
}

export function InfrastructureFunction(props: NodeProps) {
  return (
    <Shape
      {...INFRASTRUCTURE_FUNCTION}
      {...props}
      _style={extendStyle(INFRASTRUCTURE_FUNCTION, props)}
    />
  )
}
