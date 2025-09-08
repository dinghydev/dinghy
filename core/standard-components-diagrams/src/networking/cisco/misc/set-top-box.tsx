import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SET_TOP_BOX = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.set_top_box;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 114,
  _original_height: 42,
}

export function SetTopBox(props: DiagramNodeProps) {
  return (
    <Shape
      {...SET_TOP_BOX}
      {...props}
      _style={extendStyle(SET_TOP_BOX, props)}
    />
  )
}
