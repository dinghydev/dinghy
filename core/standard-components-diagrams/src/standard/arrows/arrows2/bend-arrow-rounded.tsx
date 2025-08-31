import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BEND_ARROW_ROUNDED = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;align=center;verticalAlign=middle;shape=mxgraph.arrows2.bendArrow;dy=15;dx=38;notch=0;arrowHead=55;rounded=1;',
  },
  _width: 60,
  _height: 60,
}

export function BendArrowRounded(props: DiagramNodeProps) {
  return (
    <Shape
      {...BEND_ARROW_ROUNDED}
      {...props}
      _style={extendStyle(BEND_ARROW_ROUNDED, props)}
    />
  )
}
