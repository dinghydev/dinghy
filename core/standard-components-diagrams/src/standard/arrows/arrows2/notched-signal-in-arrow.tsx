import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const NOTCHED_SIGNAL_IN_ARROW = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;align=center;verticalAlign=middle;shape=mxgraph.arrows2.arrow;dy=0;dx=10;notch=10;',
  },
  _original_width: 100,
  _original_height: 30,
}

export function NotchedSignalInArrow(props: DiagramNodeProps) {
  return (
    <Shape
      {...NOTCHED_SIGNAL_IN_ARROW}
      {...props}
      _style={extendStyle(NOTCHED_SIGNAL_IN_ARROW, props)}
    />
  )
}
