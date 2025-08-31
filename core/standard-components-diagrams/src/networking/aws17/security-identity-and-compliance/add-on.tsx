import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ADD_ON = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.add_on;fillColor=#759C3E;gradientColor=none;',
  _width: 49.5,
  _height: 27,
}

export function AddOn(props: DiagramNodeProps) {
  return <Shape {...ADD_ON} {...props} _style={extendStyle(ADD_ON, props)} />
}
