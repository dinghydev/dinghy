import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TANK_COVERED_BOOT = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.tank_(covered,_boot);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 100,
  _original_height: 85,
}

export function TankCoveredBoot(props: DiagramNodeProps) {
  return (
    <Shape
      {...TANK_COVERED_BOOT}
      {...props}
      _style={extendStyle(TANK_COVERED_BOOT, props)}
    />
  )
}
