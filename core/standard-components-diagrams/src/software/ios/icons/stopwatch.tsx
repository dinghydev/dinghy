import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STOPWATCH = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.stopwatch;',
  },
  _original_width: 27,
  _original_height: 28.2,
}

export function Stopwatch(props: DiagramNodeProps) {
  return (
    <Shape {...STOPWATCH} {...props} _style={extendStyle(STOPWATCH, props)} />
  )
}
