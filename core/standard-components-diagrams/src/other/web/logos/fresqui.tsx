import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FRESQUI = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.fresqui',
  _width: 102.4,
  _height: 102.4,
}

export function Fresqui(props: DiagramNodeProps) {
  return <Shape {...FRESQUI} {...props} _style={extendStyle(FRESQUI, props)} />
}
