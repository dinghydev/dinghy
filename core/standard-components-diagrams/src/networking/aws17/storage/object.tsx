import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OBJECT = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.object;fillColor=#E05243;gradientColor=none;',
  },
  _width: 42,
  _height: 45,
}

export function Object(props: DiagramNodeProps) {
  return <Shape {...OBJECT} {...props} _style={extendStyle(OBJECT, props)} />
}
