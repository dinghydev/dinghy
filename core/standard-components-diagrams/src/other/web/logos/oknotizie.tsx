import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const OKNOTIZIE = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.oknotizie',
  _width: 47.400000000000006,
  _height: 70.4,
}

export function Oknotizie(props: DiagramNodeProps) {
  return <Shape {...OKNOTIZIE} {...props} />
}
