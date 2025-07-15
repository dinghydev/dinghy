import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const IRON_CORE = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.inductors.iron_core;',
  _width: 64,
  _height: 4,
}

export function IronCore(props: DiagramNodeProps) {
  return <Shape {...IRON_CORE} {...props} />
}
