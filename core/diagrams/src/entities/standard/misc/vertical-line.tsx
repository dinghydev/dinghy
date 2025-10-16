import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VERTICAL_LINE = {
  _style: {
    entity: 'line;strokeWidth=2;direction=south;html=1;',
  },
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
