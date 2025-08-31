import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ASK = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.ask;fillColor=#D22028;strokeColor=none',
  _width: 68.60000000000001,
  _height: 50.6,
}

export function Ask(props: DiagramNodeProps) {
  return <Shape {...ASK} {...props} _style={extendStyle(ASK, props)} />
}
