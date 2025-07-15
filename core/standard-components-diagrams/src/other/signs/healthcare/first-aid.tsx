import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FIRST_AID = {
  _style:
    'shape=mxgraph.signs.healthcare.first_aid;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 98,
  _height: 98,
}

export function FirstAid(props: DiagramNodeProps) {
  return <Shape {...FIRST_AID} {...props} />
}
