import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const INTERNET_2 = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.internet_2;fillColor=#D2D3D3;gradientColor=none;',
  },
  _original_width: 79.5,
  _original_height: 54,
}

export function Internet2(props: DiagramNodeProps) {
  return (
    <Shape {...INTERNET_2} {...props} _style={extendStyle(INTERNET_2, props)} />
  )
}
