import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AGENT = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.agent;fillColor=#759C3E;gradientColor=none;',
  },
  _original_width: 69,
  _original_height: 72,
}

export function Agent(props: NodeProps) {
  return <Shape {...AGENT} {...props} _style={extendStyle(AGENT, props)} />
}
