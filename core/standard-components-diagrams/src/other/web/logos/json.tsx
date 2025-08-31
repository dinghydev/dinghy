import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const JSON = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.json',
  },
  _width: 70,
  _height: 75.8,
}

export function Json(props: DiagramNodeProps) {
  return <Shape {...JSON} {...props} _style={extendStyle(JSON, props)} />
}
