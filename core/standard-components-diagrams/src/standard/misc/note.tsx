import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const NOTE = {
  _style: {
    entity:
      'shape=note;whiteSpace=wrap;html=1;backgroundOutline=1;fontColor=#000000;darkOpacity=0.05;fillColor=#FFF9B2;strokeColor=none;fillStyle=solid;direction=west;gradientDirection=north;gradientColor=#FFF2A1;shadow=1;size=20;pointerEvents=1;',
  },
  _width: 140,
  _height: 160,
}

export function Note(props: DiagramNodeProps) {
  return <Shape {...NOTE} {...props} _style={extendStyle(NOTE, props)} />
}
