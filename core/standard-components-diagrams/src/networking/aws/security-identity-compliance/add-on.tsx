import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ADD_ON = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#DD344C;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.addon;',
  },
  _width: 78,
  _height: 40,
}

export function AddOn(props: DiagramNodeProps) {
  return <Shape {...ADD_ON} {...props} _style={extendStyle(ADD_ON, props)} />
}
