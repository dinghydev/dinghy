import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ASA_5500 = {
  _style:
    'shape=mxgraph.cisco.misc.asa_5500;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 59,
  _height: 67,
}

export function Asa5500(props: DiagramNodeProps) {
  return <Shape {...ASA_5500} {...props} />
}
