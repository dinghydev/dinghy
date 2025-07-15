import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LONGREACH_CPE = {
  _style:
    'shape=mxgraph.cisco.misc.longreach_cpe;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 61,
  _height: 59,
}

export function LongreachCpe(props: DiagramNodeProps) {
  return <Shape {...LONGREACH_CPE} {...props} />
}
