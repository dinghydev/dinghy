import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HATENA = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.hatena',
  _width: 86.2,
  _height: 44.2,
}

export function Hatena(props: DiagramNodeProps) {
  return <Shape {...HATENA} {...props} _style={extendStyle(HATENA, props)} />
}
