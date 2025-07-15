import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AWS = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.aws',
  _width: 63.6,
  _height: 58.400000000000006,
}

export function Aws(props: DiagramNodeProps) {
  return <Shape {...AWS} {...props} />
}
