import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BEND_ARROW_ROUNDED = {
  _style:
    'html=1;shadow=0;dashed=0;align=center;verticalAlign=middle;shape=mxgraph.arrows2.bendArrow;dy=15;dx=38;notch=0;arrowHead=55;rounded=1;',
  _width: 100,
  _height: 100,
}

export function BendArrowRounded(props: DiagramNodeProps) {
  return <Shape {...BEND_ARROW_ROUNDED} {...props} />
}
