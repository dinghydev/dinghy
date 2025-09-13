import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ARROW_DOWN = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;align=center;verticalAlign=middle;shape=mxgraph.arrows2.arrow;dy=0.6;dx=40;direction=south;notch=0;',
  },
  _width: 70,
  _height: 100,
}

export function ArrowDown(props: DiagramNodeProps) {
  return (
    <Shape {...ARROW_DOWN} {...props} _style={extendStyle(ARROW_DOWN, props)} />
  )
}
