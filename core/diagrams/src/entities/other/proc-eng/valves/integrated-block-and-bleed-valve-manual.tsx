import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INTEGRATED_BLOCK_AND_BLEED_VALVE_MANUAL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;html=1;verticalAlign=top;pointerEvents=1;dashed=0;shape=mxgraph.pid2valves.blockBleedValve;actuator=man',
  },
  _width: 100,
  _height: 170,
}

export function IntegratedBlockAndBleedValveManual(props: NodeProps) {
  return (
    <Shape
      {...INTEGRATED_BLOCK_AND_BLEED_VALVE_MANUAL}
      {...props}
      _style={extendStyle(INTEGRATED_BLOCK_AND_BLEED_VALVE_MANUAL, props)}
    />
  )
}
