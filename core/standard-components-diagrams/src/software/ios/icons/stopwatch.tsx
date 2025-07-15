import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STOPWATCH = {
  _style:
    'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.stopwatch;',
  _width: 27,
  _height: 28.2,
}

export function Stopwatch(props: DiagramNodeProps) {
  return <Shape {...STOPWATCH} {...props} />
}
