import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SURGERY = {
  _style:
    'shape=mxgraph.signs.healthcare.surgery;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 100,
  _height: 98,
}

export function Surgery(props: DiagramNodeProps) {
  return <Shape {...SURGERY} {...props} />
}
