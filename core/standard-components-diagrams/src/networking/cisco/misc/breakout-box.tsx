import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BREAKOUT_BOX = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.breakout_box;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 43,
  _original_height: 75,
}

export function BreakoutBox(props: DiagramNodeProps) {
  return (
    <Shape
      {...BREAKOUT_BOX}
      {...props}
      _style={extendStyle(BREAKOUT_BOX, props)}
    />
  )
}
