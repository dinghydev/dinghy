import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const KENNEL = {
  _style:
    'shape=mxgraph.signs.animals.kennel;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 97,
  _height: 94,
}

export function Kennel(props: DiagramNodeProps) {
  return <Shape {...KENNEL} {...props} />
}
