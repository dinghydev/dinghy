import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DECIDER = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.decider;fillColor=#D9A741;gradientColor=none;',
  },
  _original_width: 61.5,
  _original_height: 64.5,
}

export function Decider(props: NodeProps) {
  return <Shape {...DECIDER} {...props} _style={extendStyle(DECIDER, props)} />
}
