import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const STYLISED_ARROW = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;align=center;verticalAlign=middle;shape=mxgraph.arrows2.stylisedArrow;dy=0.6;dx=40;notch=15;feather=0.4;',
  },
  _original_width: 100,
  _original_height: 60,
}

export function StylisedArrow(props: DiagramNodeProps) {
  return (
    <Shape
      {...STYLISED_ARROW}
      {...props}
      _style={extendStyle(STYLISED_ARROW, props)}
    />
  )
}
