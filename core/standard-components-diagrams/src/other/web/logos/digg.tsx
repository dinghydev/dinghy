import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DIGG = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.digg',
  },
  _width: 58,
  _height: 56,
}

export function Digg(props: DiagramNodeProps) {
  return <Shape {...DIGG} {...props} _style={extendStyle(DIGG, props)} />
}
