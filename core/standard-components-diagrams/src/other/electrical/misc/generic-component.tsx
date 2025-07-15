import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GENERIC_COMPONENT = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.generic_component',
  _width: 60,
  _height: 60,
}

export function GenericComponent(props: DiagramNodeProps) {
  return <Shape {...GENERIC_COMPONENT} {...props} />
}
