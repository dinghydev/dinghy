import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VARIABLE = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.inductors.variable_inductor;',
  },
  _width: 100,
  _height: 60,
}

export function Variable(props: DiagramNodeProps) {
  return (
    <Shape {...VARIABLE} {...props} _style={extendStyle(VARIABLE, props)} />
  )
}
