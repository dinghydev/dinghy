import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MIND_BODY_GREEN = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.mind_body_green;fillColor=#E0EEF8;gradientColor=#4496D5',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function MindBodyGreen(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MIND_BODY_GREEN)} />
}
