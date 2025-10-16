import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SHARP_ARROW_2 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;align=center;verticalAlign=middle;shape=mxgraph.arrows2.sharpArrow2;dy1=0.67;dx1=18;dx2=18;dy3=0.15;dx3=27;notch=0;',
  },
  _width: 100,
  _height: 60,
}

export function SharpArrow2(props: DiagramNodeProps) {
  return (
    <Shape
      {...SHARP_ARROW_2}
      {...props}
      _style={extendStyle(SHARP_ARROW_2, props)}
    />
  )
}
