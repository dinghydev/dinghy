import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONNECT = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.connect;fillColor=#759C3E;gradientColor=none;',
  },
  _original_width: 90,
  _original_height: 69,
}

export function Connect(props: DiagramNodeProps) {
  return <Shape {...CONNECT} {...props} _style={extendStyle(CONNECT, props)} />
}
