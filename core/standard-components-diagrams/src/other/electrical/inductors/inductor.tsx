import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INDUCTOR = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.inductors.inductor;',
  _width: 100,
  _height: 42,
}

export function Inductor(props: DiagramNodeProps) {
  return (
    <Shape {...INDUCTOR} {...props} _style={extendStyle(INDUCTOR, props)} />
  )
}
