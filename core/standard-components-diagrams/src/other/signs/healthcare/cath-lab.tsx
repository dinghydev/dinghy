import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CATH_LAB = {
  _style:
    'shape=mxgraph.signs.healthcare.cath_lab;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 98,
  _height: 100,
}

export function CathLab(props: DiagramNodeProps) {
  return (
    <Shape {...CATH_LAB} {...props} _style={extendStyle(CATH_LAB, props)} />
  )
}
