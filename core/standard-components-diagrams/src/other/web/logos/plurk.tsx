import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PLURK = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.plurk;fillColor=#E9443D;strokeColor=none',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function Plurk(props: DiagramNodeProps) {
  return <Shape {...PLURK} {...props} _style={extendStyle(PLURK, props)} />
}
