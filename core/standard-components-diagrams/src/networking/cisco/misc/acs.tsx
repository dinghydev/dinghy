import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ACS = {
  _style:
    'shape=mxgraph.cisco.misc.acs;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 75,
  _height: 53,
}

export function Acs(props: DiagramNodeProps) {
  return <Shape {...ACS} {...props} />
}
