import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const JSON = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.json',
  },
  _original_width: 70,
  _original_height: 75.8,
}

export function Json(props: DiagramNodeProps) {
  return <Shape {...JSON} {...props} _style={extendStyle(JSON, props)} />
}
