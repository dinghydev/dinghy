import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const INTERFACE_2 = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#EBEBEB;shape=mxgraph.archimate3.interface;',
  },
  _width: 70,
  _height: 35,
}

export function Interface2(props: DiagramNodeProps) {
  return (
    <Shape
      {...INTERFACE_2}
      {...props}
      _style={extendStyle(INTERFACE_2, props)}
    />
  )
}
