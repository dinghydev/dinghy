import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SET_TOP_BOX = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.set_top_box;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 114,
  _height: 42,
}

export function SetTopBox(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SET_TOP_BOX)} />
}
