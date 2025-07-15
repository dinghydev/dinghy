import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NEWSVINE = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.newsvine;fillColor=#005221;strokeColor=none',
  _width: 40.6,
  _height: 77.2,
}

export function Newsvine(props: DiagramNodeProps) {
  return <Shape {...NEWSVINE} {...props} />
}
