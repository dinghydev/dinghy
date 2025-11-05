import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ACTION = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.action;fillColor=#5294CF;gradientColor=none;',
  },
  _original_width: 63,
  _original_height: 64.5,
}

export function Action(props: NodeProps) {
  return <Shape {...ACTION} {...props} _style={extendStyle(ACTION, props)} />
}
