import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const INTERNET_3 = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.internet_3;fillColor=#D2D3D3;gradientColor=none;',
  },
  _width: 79.5,
  _height: 54,
}

export function Internet3(props: DiagramNodeProps) {
  return (
    <Shape {...INTERNET_3} {...props} _style={extendStyle(INTERNET_3, props)} />
  )
}
