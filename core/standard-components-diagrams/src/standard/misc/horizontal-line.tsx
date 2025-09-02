import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HORIZONTAL_LINE = {
  _style: {
    entity: 'line;strokeWidth=2;html=1;',
  },
  _original_width: 160,
  _original_height: 10,
}

export function HorizontalLine(props: DiagramNodeProps) {
  return (
    <Shape
      {...HORIZONTAL_LINE}
      {...props}
      _style={extendStyle(HORIZONTAL_LINE, props)}
    />
  )
}
