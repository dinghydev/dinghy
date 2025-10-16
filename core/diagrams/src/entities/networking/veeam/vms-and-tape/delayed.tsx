import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DELAYED = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.delayed;',
  },
  _original_width: 36,
  _original_height: 36,
}

export function Delayed(props: DiagramNodeProps) {
  return <Shape {...DELAYED} {...props} _style={extendStyle(DELAYED, props)} />
}
