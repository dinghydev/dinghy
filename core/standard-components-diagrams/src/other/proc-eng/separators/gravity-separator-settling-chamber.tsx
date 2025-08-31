import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GRAVITY_SEPARATOR_SETTLING_CHAMBER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.separators.gravity_separator,_settling_chamber2;',
  },
  _width: 80,
  _height: 120,
}

export function GravitySeparatorSettlingChamber(props: DiagramNodeProps) {
  return (
    <Shape
      {...GRAVITY_SEPARATOR_SETTLING_CHAMBER}
      {...props}
      _style={extendStyle(GRAVITY_SEPARATOR_SETTLING_CHAMBER, props)}
    />
  )
}
