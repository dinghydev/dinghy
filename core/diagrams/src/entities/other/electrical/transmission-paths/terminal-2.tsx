import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TERMINAL_2 = {
  _style: {
    entity:
      'verticalLabelPosition=middle;shadow=0;dashed=0;align=center;html=1;verticalAlign=middle;strokeWidth=1;shape=ellipse;fontSize=50;fontStyle=1;perimeter=ellipsePerimeter;whiteSpace=wrap;',
  },
  _original_width: 130,
  _original_height: 130,
}

export function Terminal2(props: NodeProps) {
  return (
    <Shape {...TERMINAL_2} {...props} _style={extendStyle(TERMINAL_2, props)} />
  )
}
