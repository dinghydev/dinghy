import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PREPARATION = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=hexagon;perimeter=hexagonPerimeter2;arcSize=6;size=0.27;',
  _width: 100,
  _height: 60,
}

export function Preparation(props: DiagramNodeProps) {
  return (
    <Shape
      {...PREPARATION}
      {...props}
      _style={extendStyle(PREPARATION, props)}
    />
  )
}
