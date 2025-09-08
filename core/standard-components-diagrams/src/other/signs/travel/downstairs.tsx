import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DOWNSTAIRS = {
  _style: {
    entity:
      'shape=mxgraph.signs.travel.downstairs;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 99,
  _original_height: 83,
}

export function Downstairs(props: DiagramNodeProps) {
  return (
    <Shape {...DOWNSTAIRS} {...props} _style={extendStyle(DOWNSTAIRS, props)} />
  )
}
