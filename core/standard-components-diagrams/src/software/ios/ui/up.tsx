import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const UP = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;shadow=0;dashed=0;strokeWidth=2;shape=mxgraph.ios7.misc.up;strokeColor=#0080f0;',
  },
  _original_width: 12,
  _original_height: 6,
}

export function Up(props: DiagramNodeProps) {
  return <Shape {...UP} {...props} _style={extendStyle(UP, props)} />
}
