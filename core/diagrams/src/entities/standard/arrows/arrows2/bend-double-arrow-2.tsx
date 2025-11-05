import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BEND_DOUBLE_ARROW_2 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;align=center;verticalAlign=middle;shape=mxgraph.arrows2.bendDoubleArrow;dy=15;dx=38;arrowHead=55;rounded=1;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function BendDoubleArrow2(props: NodeProps) {
  return (
    <Shape
      {...BEND_DOUBLE_ARROW_2}
      {...props}
      _style={extendStyle(BEND_DOUBLE_ARROW_2, props)}
    />
  )
}
