import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GOOGLE = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.google',
  _width: 65.2,
  _height: 69.4,
}

export function Google(props: DiagramNodeProps) {
  return <Shape {...GOOGLE} {...props} _style={extendStyle(GOOGLE, props)} />
}
