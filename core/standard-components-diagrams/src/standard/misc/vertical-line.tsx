import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VERTICAL_LINE = {
  _style: 'line;strokeWidth=2;direction=south;html=1;',
  _width: 10,
  _height: 160,
}

export function VerticalLine(props: DiagramNodeProps) {
  return (
    <Shape
      {...VERTICAL_LINE}
      {...props}
      _style={extendStyle(VERTICAL_LINE, props)}
    />
  )
}
