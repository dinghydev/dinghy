import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GOOGLE_2 = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.google_plus;fillColor=#DD4C40;strokeColor=none',
  _width: 65.60000000000001,
  _height: 44,
}

export function Google2(props: DiagramNodeProps) {
  return <Shape {...GOOGLE_2} {...props} />
}
