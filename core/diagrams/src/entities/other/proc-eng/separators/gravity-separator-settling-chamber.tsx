import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const GRAVITY_SEPARATOR_SETTLING_CHAMBER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.separators.gravity_separator,_settling_chamber2;',
  },
  _width: 80,
  _height: 120,
}

export function GravitySeparatorSettlingChamber(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, GRAVITY_SEPARATOR_SETTLING_CHAMBER)}
    />
  )
}
