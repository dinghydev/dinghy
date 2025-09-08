import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LINKAGOGO = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.linkagogo;fillColor=#F6F5FA;gradientColor=#C8C1E1',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function Linkagogo(props: DiagramNodeProps) {
  return (
    <Shape {...LINKAGOGO} {...props} _style={extendStyle(LINKAGOGO, props)} />
  )
}
