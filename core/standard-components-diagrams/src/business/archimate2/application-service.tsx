import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const APPLICATION_SERVICE = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#99ffff;shape=mxgraph.archimate.application;appType=service',
  },
  _width: 100,
  _height: 75,
}

export function ApplicationService(props: DiagramNodeProps) {
  return (
    <Shape
      {...APPLICATION_SERVICE}
      {...props}
      _style={extendStyle(APPLICATION_SERVICE, props)}
    />
  )
}
