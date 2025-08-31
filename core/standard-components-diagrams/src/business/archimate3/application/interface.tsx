import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INTERFACE = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#99ffff;shape=mxgraph.archimate3.interface;',
  },
  _width: 70,
  _height: 35,
}

export function Interface(props: DiagramNodeProps) {
  return (
    <Shape {...INTERFACE} {...props} _style={extendStyle(INTERFACE, props)} />
  )
}
