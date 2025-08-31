import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STYLISED_ARROW = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;align=center;verticalAlign=middle;shape=mxgraph.arrows2.stylisedArrow;dy=0.6;dx=40;notch=15;feather=0.4;',
  },
  _width: 100,
  _height: 60,
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
