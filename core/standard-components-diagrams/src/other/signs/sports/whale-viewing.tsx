import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const WHALE_VIEWING = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.whale_viewing;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 98,
  _original_height: 99,
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
