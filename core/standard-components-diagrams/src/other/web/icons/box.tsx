import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BOX = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.box;fillColor=#4CDFEF;gradientColor=#153EA0',
  _width: 102.4,
  _height: 102.4,
}

export function Box(props: DiagramNodeProps) {
  return <Shape {...BOX} {...props} _style={extendStyle(BOX, props)} />
}
