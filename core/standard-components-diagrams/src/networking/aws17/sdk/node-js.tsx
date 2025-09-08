import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const NODE_JS = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.android;fillColor=#8CC64F;gradientColor=none;',
  },
  _original_width: 73.5,
  _original_height: 84,
}

export function NodeJs(props: DiagramNodeProps) {
  return <Shape {...NODE_JS} {...props} _style={extendStyle(NODE_JS, props)} />
}
