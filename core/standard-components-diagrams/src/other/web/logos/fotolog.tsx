import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FOTOLOG = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.fotolog;fillColor=#000000;strokeColor=none',
  },
  _width: 47.6,
  _height: 47.6,
}

export function Fotolog(props: DiagramNodeProps) {
  return <Shape {...FOTOLOG} {...props} _style={extendStyle(FOTOLOG, props)} />
}
