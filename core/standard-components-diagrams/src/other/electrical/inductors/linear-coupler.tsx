import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LINEAR_COUPLER = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.inductors.linear_coupler;',
  },
  _width: 80,
  _height: 20,
}

export function LinearCoupler(props: DiagramNodeProps) {
  return (
    <Shape
      {...LINEAR_COUPLER}
      {...props}
      _style={extendStyle(LINEAR_COUPLER, props)}
    />
  )
}
