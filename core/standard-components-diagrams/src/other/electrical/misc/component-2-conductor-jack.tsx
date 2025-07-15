import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMPONENT_2_CONDUCTOR_JACK = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.2_conductor_jack',
  _width: 100,
  _height: 50,
}

export function Component2ConductorJack(props: DiagramNodeProps) {
  return <Shape {...COMPONENT_2_CONDUCTOR_JACK} {...props} />
}
