import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MALE = {
  _style:
    'shape=mxgraph.signs.people.male;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 103,
  _height: 103,
}

export function Male(props: DiagramNodeProps) {
  return <Shape {...MALE} {...props} />
}
