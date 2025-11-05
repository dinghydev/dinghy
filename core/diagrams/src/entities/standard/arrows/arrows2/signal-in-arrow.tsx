import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SIGNAL_IN_ARROW = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;align=center;verticalAlign=middle;shape=mxgraph.arrows2.arrow;dy=0;dx=10;notch=0;',
  },
  _width: 100,
  _height: 30,
}

export function SignalInArrow(props: NodeProps) {
  return (
    <Shape
      {...SIGNAL_IN_ARROW}
      {...props}
      _style={extendStyle(SIGNAL_IN_ARROW, props)}
    />
  )
}
