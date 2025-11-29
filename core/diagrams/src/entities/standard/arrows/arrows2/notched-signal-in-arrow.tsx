import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NOTCHED_SIGNAL_IN_ARROW = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;align=center;verticalAlign=middle;shape=mxgraph.arrows2.arrow;dy=0;dx=10;notch=10;',
  },
  _width: 100,
  _height: 30,
}

export function NotchedSignalInArrow(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, NOTCHED_SIGNAL_IN_ARROW)} />
  )
}
