import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INTEGRATOR = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.abstract.integrator;',
  _width: 50,
  _height: 50,
}

export function Integrator(props: DiagramNodeProps) {
  return <Shape {...INTEGRATOR} {...props} />
}
