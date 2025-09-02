import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SLENDER_ARROW = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;align=center;verticalAlign=middle;shape=mxgraph.arrows2.arrow;dy=0.67;dx=20;notch=0;',
  },
  _original_width: 100,
  _original_height: 60,
}

export function SlenderArrow(props: DiagramNodeProps) {
  return (
    <Shape
      {...SLENDER_ARROW}
      {...props}
      _style={extendStyle(SLENDER_ARROW, props)}
    />
  )
}
