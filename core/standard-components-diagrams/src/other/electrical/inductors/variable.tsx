import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VARIABLE = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.inductors.variable_inductor;',
  },
  _original_width: 100,
  _original_height: 60,
}

export function Variable(props: DiagramNodeProps) {
  return (
    <Shape {...VARIABLE} {...props} _style={extendStyle(VARIABLE, props)} />
  )
}
