import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ARROW_UP = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;align=center;verticalAlign=middle;shape=mxgraph.arrows2.arrow;dy=0.6;dx=40;direction=north;notch=0;',
  },
  _width: 70,
  _height: 100,
}

export function ArrowUp(props: NodeProps) {
  return (
    <Shape {...ARROW_UP} {...props} _style={extendStyle(ARROW_UP, props)} />
  )
}
