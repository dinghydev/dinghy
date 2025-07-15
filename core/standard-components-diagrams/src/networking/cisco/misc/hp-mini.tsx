import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const HP_MINI = {
  _style:
    'shape=mxgraph.cisco.misc.hp_mini;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 50,
  _height: 54,
}

export function HpMini(props: DiagramNodeProps) {
  return <Shape {...HP_MINI} {...props} />
}
