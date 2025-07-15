import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ME1100 = {
  _style:
    'shape=mxgraph.cisco.misc.me1100;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 91,
  _height: 48,
}

export function Me1100(props: DiagramNodeProps) {
  return <Shape {...ME1100} {...props} />
}
