import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GMAIL = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.gmail',
  _width: 64.8,
  _height: 46.800000000000004,
}

export function Gmail(props: DiagramNodeProps) {
  return <Shape {...GMAIL} {...props} />
}
