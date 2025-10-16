import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SEPARATOR_ELECTROSTATIC_PRECIPITATOR_WET = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.separators.separator_(electrostatic_precipitator,_wet);',
  },
  _width: 80,
  _height: 120,
}

export function SeparatorElectrostaticPrecipitatorWet(props: DiagramNodeProps) {
  return (
    <Shape
      {...SEPARATOR_ELECTROSTATIC_PRECIPITATOR_WET}
      {...props}
      _style={extendStyle(SEPARATOR_ELECTROSTATIC_PRECIPITATOR_WET, props)}
    />
  )
}
