import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SPEAKER = {
  _style:
    'shape=mxgraph.cisco.computers_and_peripherals.speaker;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 53,
  _height: 94,
}

export function Speaker(props: DiagramNodeProps) {
  return <Shape {...SPEAKER} {...props} />
}
