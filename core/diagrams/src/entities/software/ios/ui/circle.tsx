import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CIRCLE = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;shadow=0;dashed=0;strokeWidth=2;shape=mxgraph.ios7.misc.circle;strokeColor=#222222;fillColor=none;',
  },
  _original_width: 12,
  _original_height: 12,
}

export function Circle(props: NodeProps) {
  return <Shape {...CIRCLE} {...props} _style={extendStyle(CIRCLE, props)} />
}
