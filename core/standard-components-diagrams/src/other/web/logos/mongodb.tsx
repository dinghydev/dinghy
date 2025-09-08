import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MONGODB = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.mongodb',
  },
  _original_width: 41.2,
  _original_height: 86.2,
}

export function Mongodb(props: DiagramNodeProps) {
  return <Shape {...MONGODB} {...props} _style={extendStyle(MONGODB, props)} />
}
