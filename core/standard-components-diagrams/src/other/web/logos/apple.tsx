import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const APPLE = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.apple;fillColor=#1B1C1C;strokeColor=none',
  _width: 62.400000000000006,
  _height: 76.2,
}

export function Apple(props: DiagramNodeProps) {
  return <Shape {...APPLE} {...props} _style={extendStyle(APPLE, props)} />
}
