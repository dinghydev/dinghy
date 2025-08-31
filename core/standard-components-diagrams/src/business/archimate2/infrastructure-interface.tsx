import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INFRASTRUCTURE_INTERFACE = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#99ff99;shape=mxgraph.archimate.application;appType=interface',
  },
  _width: 100,
  _height: 75,
}

export function InfrastructureInterface(props: DiagramNodeProps) {
  return (
    <Shape
      {...INFRASTRUCTURE_INTERFACE}
      {...props}
      _style={extendStyle(INFRASTRUCTURE_INTERFACE, props)}
    />
  )
}
