import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const APPLICATION_INTERFACE = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#99ffff;shape=mxgraph.archimate.application;appType=interface',
  },
  _width: 100,
  _height: 75,
}

export function ApplicationInterface(props: DiagramNodeProps) {
  return (
    <Shape
      {...APPLICATION_INTERFACE}
      {...props}
      _style={extendStyle(APPLICATION_INTERFACE, props)}
    />
  )
}
