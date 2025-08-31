import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const UPSTAIRS = {
  _style:
    'shape=mxgraph.signs.travel.upstairs;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 98,
  _height: 85,
}

export function Upstairs(props: DiagramNodeProps) {
  return (
    <Shape {...UPSTAIRS} {...props} _style={extendStyle(UPSTAIRS, props)} />
  )
}
