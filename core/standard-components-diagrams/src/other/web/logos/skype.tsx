import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SKYPE = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.skype;fillColor=#2AACE2;strokeColor=none',
  _width: 77.60000000000001,
  _height: 78.80000000000001,
}

export function Skype(props: DiagramNodeProps) {
  return <Shape {...SKYPE} {...props} />
}
