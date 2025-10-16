import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ROTATING_MACHINE = {
  _style: {
    entity:
      'verticalLabelPosition=middle;shadow=0;dashed=0;align=center;html=1;verticalAlign=middle;strokeWidth=1;shape=ellipse;fontSize=32;perimeter=ellipsePerimeter;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function RotatingMachine(props: DiagramNodeProps) {
  return (
    <Shape
      {...ROTATING_MACHINE}
      {...props}
      _style={extendStyle(ROTATING_MACHINE, props)}
    />
  )
}
