import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MXE = {
  _style:
    'shape=mxgraph.cisco.misc.mxe;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 59,
  _height: 61,
}

export function Mxe(props: DiagramNodeProps) {
  return <Shape {...MXE} {...props} />
}
