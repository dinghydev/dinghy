import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const APPLICATION_INTERFACE = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#99ffff;shape=mxgraph.archimate3.application;appType=interface;archiType=square;',
  },
  _width: 150,
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
