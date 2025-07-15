import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ONS15500 = {
  _style:
    'shape=mxgraph.cisco.misc.ons15500;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 78,
  _height: 72,
}

export function Ons15500(props: DiagramNodeProps) {
  return <Shape {...ONS15500} {...props} />
}
