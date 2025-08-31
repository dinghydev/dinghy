import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ANESTHESIA = {
  _style:
    'shape=mxgraph.signs.healthcare.anesthesia;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 98,
  _height: 85,
}

export function Anesthesia(props: DiagramNodeProps) {
  return (
    <Shape {...ANESTHESIA} {...props} _style={extendStyle(ANESTHESIA, props)} />
  )
}
