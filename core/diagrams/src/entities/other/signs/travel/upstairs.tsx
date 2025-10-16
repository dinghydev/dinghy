import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const UPSTAIRS = {
  _style: {
    entity:
      'shape=mxgraph.signs.travel.upstairs;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 98,
  _original_height: 85,
}

export function Upstairs(props: DiagramNodeProps) {
  return (
    <Shape {...UPSTAIRS} {...props} _style={extendStyle(UPSTAIRS, props)} />
  )
}
