import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WHALE_VIEWING = {
  _style:
    'shape=mxgraph.signs.sports.whale_viewing;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 98,
  _height: 99,
}

export function WhaleViewing(props: DiagramNodeProps) {
  return (
    <Shape
      {...WHALE_VIEWING}
      {...props}
      _style={extendStyle(WHALE_VIEWING, props)}
    />
  )
}
