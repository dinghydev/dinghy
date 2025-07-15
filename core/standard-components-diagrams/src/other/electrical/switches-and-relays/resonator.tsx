import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const RESONATOR = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.resonator;',
  _width: 100,
  _height: 50,
}

export function Resonator(props: DiagramNodeProps) {
  return <Shape {...RESONATOR} {...props} />
}
