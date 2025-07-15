import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CRYSTAL = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.crystal_1;',
  _width: 100,
  _height: 40,
}

export function Crystal(props: DiagramNodeProps) {
  return <Shape {...CRYSTAL} {...props} />
}
