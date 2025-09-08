import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CHECK = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;shadow=0;dashed=0;strokeWidth=2;shape=mxgraph.ios7.misc.check;strokeColor=#0080f0;',
  },
  _original_width: 10,
  _original_height: 8,
}

export function Check(props: DiagramNodeProps) {
  return <Shape {...CHECK} {...props} _style={extendStyle(CHECK, props)} />
}
