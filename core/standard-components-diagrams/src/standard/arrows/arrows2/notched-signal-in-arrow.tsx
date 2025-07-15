import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NOTCHED_SIGNAL_IN_ARROW = {
  _style:
    'html=1;shadow=0;dashed=0;align=center;verticalAlign=middle;shape=mxgraph.arrows2.arrow;dy=0;dx=10;notch=10;',
  _width: 100,
  _height: 30,
}

export function NotchedSignalInArrow(props: DiagramNodeProps) {
  return <Shape {...NOTCHED_SIGNAL_IN_ARROW} {...props} />
}
