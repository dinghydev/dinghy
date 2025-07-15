import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GROUND_TERMINAL = {
  _style:
    'shape=mxgraph.cisco.wireless.ground_terminal;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 99,
  _height: 122,
}

export function GroundTerminal(props: DiagramNodeProps) {
  return <Shape {...GROUND_TERMINAL} {...props} />
}
