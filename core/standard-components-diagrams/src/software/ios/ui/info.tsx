import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const INFO = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;shadow=0;dashed=0;strokeWidth=2;shape=mxgraph.ios7.misc.info;strokeColor=#0080f0;sketch=0;',
  },
  _original_width: 12,
  _original_height: 12,
}

export function Info(props: DiagramNodeProps) {
  return <Shape {...INFO} {...props} _style={extendStyle(INFO, props)} />
}
