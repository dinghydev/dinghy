import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const INFRASTRUCTURE_SERVICE = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#99ff99;shape=mxgraph.archimate.business;busType=service',
  },
  _original_width: 100,
  _original_height: 75,
}

export function InfrastructureService(props: DiagramNodeProps) {
  return (
    <Shape
      {...INFRASTRUCTURE_SERVICE}
      {...props}
      _style={extendStyle(INFRASTRUCTURE_SERVICE, props)}
    />
  )
}
