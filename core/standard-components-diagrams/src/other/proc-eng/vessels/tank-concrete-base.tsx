import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TANK_CONCRETE_BASE = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.tank_(concrete_base);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 120,
  _original_height: 91,
}

export function TankConcreteBase(props: DiagramNodeProps) {
  return (
    <Shape
      {...TANK_CONCRETE_BASE}
      {...props}
      _style={extendStyle(TANK_CONCRETE_BASE, props)}
    />
  )
}
