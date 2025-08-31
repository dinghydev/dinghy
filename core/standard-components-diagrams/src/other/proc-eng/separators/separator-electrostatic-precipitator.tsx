import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SEPARATOR_ELECTROSTATIC_PRECIPITATOR = {
  _style:
    'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.separators.separator_(electrostatic_precipitator);',
  _width: 80,
  _height: 120,
}

export function SeparatorElectrostaticPrecipitator(props: DiagramNodeProps) {
  return (
    <Shape
      {...SEPARATOR_ELECTROSTATIC_PRECIPITATOR}
      {...props}
      _style={extendStyle(SEPARATOR_ELECTROSTATIC_PRECIPITATOR, props)}
    />
  )
}
