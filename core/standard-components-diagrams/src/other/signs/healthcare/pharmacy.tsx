import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PHARMACY = {
  _style:
    'shape=mxgraph.signs.healthcare.pharmacy;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 53,
  _height: 98,
}

export function Pharmacy(props: DiagramNodeProps) {
  return (
    <Shape {...PHARMACY} {...props} _style={extendStyle(PHARMACY, props)} />
  )
}
