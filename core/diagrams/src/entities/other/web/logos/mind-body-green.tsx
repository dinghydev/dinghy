import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MIND_BODY_GREEN = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.mind_body_green;strokeColor=#888888',
  },
  _original_width: 81.4,
  _original_height: 92.80000000000001,
}

export function MindBodyGreen(props: NodeProps) {
  return (
    <Shape
      {...MIND_BODY_GREEN}
      {...props}
      _style={extendStyle(MIND_BODY_GREEN, props)}
    />
  )
}
