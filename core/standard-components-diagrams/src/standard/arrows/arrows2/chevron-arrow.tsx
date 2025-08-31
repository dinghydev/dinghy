import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CHEVRON_ARROW = {
  _style:
    'html=1;shadow=0;dashed=0;align=center;verticalAlign=middle;shape=mxgraph.arrows2.arrow;dy=0;dx=30;notch=30;',
  _width: 100,
  _height: 60,
}

export function ChevronArrow(props: DiagramNodeProps) {
  return (
    <Shape
      {...CHEVRON_ARROW}
      {...props}
      _style={extendStyle(CHEVRON_ARROW, props)}
    />
  )
}
