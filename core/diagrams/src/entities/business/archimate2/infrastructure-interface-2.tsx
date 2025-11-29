import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INFRASTRUCTURE_INTERFACE_2 = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#99ff99;shape=mxgraph.archimate.application;appType=interface2',
  },
  _width: 100,
  _height: 75,
}

export function InfrastructureInterface2(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, INFRASTRUCTURE_INTERFACE_2)} />
  )
}
