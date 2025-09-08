import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BEHANCE = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.behance;fillColor=#3A3333',
  },
  _original_width: 73.8,
  _original_height: 45.6,
}

export function Behance(props: DiagramNodeProps) {
  return <Shape {...BEHANCE} {...props} _style={extendStyle(BEHANCE, props)} />
}
