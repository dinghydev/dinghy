import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SHARP_ARROW = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;align=center;verticalAlign=middle;shape=mxgraph.arrows2.sharpArrow;dy1=0.67;dx1=18;dx2=18;notch=0;',
  },
  _width: 100,
  _height: 60,
}

export function SharpArrow(props: NodeProps) {
  return (
    <Shape
      {...SHARP_ARROW}
      {...props}
      _style={extendStyle(SHARP_ARROW, props)}
    />
  )
}
