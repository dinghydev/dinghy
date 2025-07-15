import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GENERALIZATION = {
  _style:
    'endArrow=block;html=1;endFill=0;edgeStyle=none;endSize=12;labelBackgroundColor=none;align=left;',
  _width: 2,
  _height: 180,
}

export function Generalization(props: DiagramNodeProps) {
  return <Shape {...GENERALIZATION} {...props} />
}
