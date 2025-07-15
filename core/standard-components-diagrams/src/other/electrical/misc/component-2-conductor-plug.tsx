import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMPONENT_2_CONDUCTOR_PLUG = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.2_conductor_plug',
  _width: 53,
  _height: 24,
}

export function Component2ConductorPlug(props: DiagramNodeProps) {
  return <Shape {...COMPONENT_2_CONDUCTOR_PLUG} {...props} />
}
