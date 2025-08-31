import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FWISP = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.fwisp;fillColor=#66676A;strokeColor=none',
  },
  _width: 65.4,
  _height: 66,
}

export function Fwisp(props: DiagramNodeProps) {
  return <Shape {...FWISP} {...props} _style={extendStyle(FWISP, props)} />
}
