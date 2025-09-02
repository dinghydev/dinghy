import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RIGHT = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;shadow=0;dashed=0;strokeWidth=2;shape=mxgraph.ios7.misc.right;strokeColor=#0080f0;',
  },
  _original_width: 6,
  _original_height: 12,
}

export function Right(props: DiagramNodeProps) {
  return <Shape {...RIGHT} {...props} _style={extendStyle(RIGHT, props)} />
}
