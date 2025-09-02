import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VACUUM_PUMP = {
  _style: {
    entity:
      'shape=mxgraph.pid.pumps.vacuum_pump;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 99,
  _original_height: 49,
}

export function VacuumPump(props: DiagramNodeProps) {
  return (
    <Shape
      {...VACUUM_PUMP}
      {...props}
      _style={extendStyle(VACUUM_PUMP, props)}
    />
  )
}
