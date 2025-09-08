import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const NETVIBES = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.netvibes;fillColor=#99DB00;gradientColor=#638E00',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function Netvibes(props: DiagramNodeProps) {
  return (
    <Shape {...NETVIBES} {...props} _style={extendStyle(NETVIBES, props)} />
  )
}
