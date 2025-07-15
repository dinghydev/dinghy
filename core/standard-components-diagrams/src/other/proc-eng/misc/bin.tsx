import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BIN = {
  _style:
    'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.bin;',
  _width: 100,
  _height: 65,
}

export function Bin(props: DiagramNodeProps) {
  return <Shape {...BIN} {...props} />
}
