import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BOX = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.box;fillColor=#2771B9;strokeColor=none',
  _width: 44.6,
  _height: 64.2,
}

export function Box(props: DiagramNodeProps) {
  return <Shape {...BOX} {...props} _style={extendStyle(BOX, props)} />
}
