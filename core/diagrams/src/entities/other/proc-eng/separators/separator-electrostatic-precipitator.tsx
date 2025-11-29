import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SEPARATOR_ELECTROSTATIC_PRECIPITATOR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.separators.separator_(electrostatic_precipitator);',
  },
  _width: 80,
  _height: 120,
}

export function SeparatorElectrostaticPrecipitator(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, SEPARATOR_ELECTROSTATIC_PRECIPITATOR)}
    />
  )
}
