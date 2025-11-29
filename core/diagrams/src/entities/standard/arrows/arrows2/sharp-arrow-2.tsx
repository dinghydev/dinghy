import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SHARP_ARROW_2 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;align=center;verticalAlign=middle;shape=mxgraph.arrows2.sharpArrow2;dy1=0.67;dx1=18;dx2=18;dy3=0.15;dx3=27;notch=0;',
  },
  _width: 100,
  _height: 60,
}

export function SharpArrow2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SHARP_ARROW_2)} />
}
