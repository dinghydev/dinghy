import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FAMILY_PRACTICE = {
  _style:
    'shape=mxgraph.signs.healthcare.family_practice;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 98,
  _height: 98,
}

export function FamilyPractice(props: DiagramNodeProps) {
  return <Shape {...FAMILY_PRACTICE} {...props} />
}
