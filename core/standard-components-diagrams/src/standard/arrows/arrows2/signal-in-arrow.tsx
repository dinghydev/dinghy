import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SIGNAL_IN_ARROW = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;align=center;verticalAlign=middle;shape=mxgraph.arrows2.arrow;dy=0;dx=10;notch=0;',
  },
  _original_width: 100,
  _original_height: 30,
}

export function SignalInArrow(props: DiagramNodeProps) {
  return (
    <Shape
      {...SIGNAL_IN_ARROW}
      {...props}
      _style={extendStyle(SIGNAL_IN_ARROW, props)}
    />
  )
}
