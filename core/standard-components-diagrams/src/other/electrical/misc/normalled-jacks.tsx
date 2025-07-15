import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NORMALLED_JACKS = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.normalled_jacks2',
  _width: 230,
  _height: 65,
}

export function NormalledJacks(props: DiagramNodeProps) {
  return <Shape {...NORMALLED_JACKS} {...props} />
}
