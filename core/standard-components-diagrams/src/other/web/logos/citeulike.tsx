import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CITEULIKE = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.citeulike;fillColor=#698139',
  },
  _original_width: 75.60000000000001,
  _original_height: 36,
}

export function Citeulike(props: DiagramNodeProps) {
  return (
    <Shape {...CITEULIKE} {...props} _style={extendStyle(CITEULIKE, props)} />
  )
}
