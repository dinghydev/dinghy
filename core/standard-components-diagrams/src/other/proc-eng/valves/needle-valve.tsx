import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NEEDLE_VALVE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;html=1;verticalAlign=top;pointerEvents=1;dashed=0;shape=mxgraph.pid2valves.valve;valveType=needle',
  },
  _original_width: 100,
  _original_height: 60,
}

export function NeedleValve(props: DiagramNodeProps) {
  return (
    <Shape
      {...NEEDLE_VALVE}
      {...props}
      _style={extendStyle(NEEDLE_VALVE, props)}
    />
  )
}
