import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FOLKD = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.folkd;fillColor=#165AA6',
  },
  _original_width: 83.80000000000001,
  _original_height: 43.6,
}

export function Folkd(props: DiagramNodeProps) {
  return <Shape {...FOLKD} {...props} _style={extendStyle(FOLKD, props)} />
}
