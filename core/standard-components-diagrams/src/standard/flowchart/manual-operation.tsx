import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MANUAL_OPERATION = {
  _style: {
    entity:
      'verticalLabelPosition=middle;verticalAlign=middle;html=1;shape=trapezoid;perimeter=trapezoidPerimeter;whiteSpace=wrap;size=0.23;arcSize=10;flipV=1;labelPosition=center;align=center;',
  },
  _original_width: 100,
  _original_height: 60,
}

export function ManualOperation(props: DiagramNodeProps) {
  return (
    <Shape
      {...MANUAL_OPERATION}
      {...props}
      _style={extendStyle(MANUAL_OPERATION, props)}
    />
  )
}
