import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PLAXO = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.plaxo;fillColor=#414F5C;strokeColor=none',
  _width: 60,
  _height: 60,
}

export function Plaxo(props: DiagramNodeProps) {
  return <Shape {...PLAXO} {...props} _style={extendStyle(PLAXO, props)} />
}
