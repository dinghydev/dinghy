import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const STARTAID = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.startaid;fillColor=#409FCF;strokeColor=none',
  },
  _original_width: 41.2,
  _original_height: 42.6,
}

export function Startaid(props: NodeProps) {
  return (
    <Shape {...STARTAID} {...props} _style={extendStyle(STARTAID, props)} />
  )
}
