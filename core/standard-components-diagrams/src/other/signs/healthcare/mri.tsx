import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MRI = {
  _style:
    'shape=mxgraph.signs.healthcare.mri;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 98,
  _height: 93,
}

export function Mri(props: DiagramNodeProps) {
  return <Shape {...MRI} {...props} />
}
