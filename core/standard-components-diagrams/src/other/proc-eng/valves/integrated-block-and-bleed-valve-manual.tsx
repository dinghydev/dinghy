import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const INTEGRATED_BLOCK_AND_BLEED_VALVE_MANUAL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;html=1;verticalAlign=top;pointerEvents=1;dashed=0;shape=mxgraph.pid2valves.blockBleedValve;actuator=man',
  },
  _original_width: 100,
  _original_height: 170,
}

export function IntegratedBlockAndBleedValveManual(props: DiagramNodeProps) {
  return (
    <Shape
      {...INTEGRATED_BLOCK_AND_BLEED_VALVE_MANUAL}
      {...props}
      _style={extendStyle(INTEGRATED_BLOCK_AND_BLEED_VALVE_MANUAL, props)}
    />
  )
}
