import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DIRECT_CONNECT = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.direct_connect;fillColor=#F58536;gradientColor=none;',
  },
  _width: 67.5,
  _height: 81,
}

export function DirectConnect(props: DiagramNodeProps) {
  return (
    <Shape
      {...DIRECT_CONNECT}
      {...props}
      _style={extendStyle(DIRECT_CONNECT, props)}
    />
  )
}
