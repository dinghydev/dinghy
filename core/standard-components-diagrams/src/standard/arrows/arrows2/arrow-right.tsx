import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ARROW_RIGHT = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;align=center;verticalAlign=middle;shape=mxgraph.arrows2.arrow;dy=0.6;dx=40;notch=0;',
  },
  _width: 100,
  _height: 70,
}

export function ArrowRight(props: DiagramNodeProps) {
  return (
    <Shape
      {...ARROW_RIGHT}
      {...props}
      _style={extendStyle(ARROW_RIGHT, props)}
    />
  )
}
