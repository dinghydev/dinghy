import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CONTROLLED_AMPLIFIER = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.abstract.controlled_amplifier;',
  _width: 100,
  _height: 90,
}

export function ControlledAmplifier(props: DiagramNodeProps) {
  return <Shape {...CONTROLLED_AMPLIFIER} {...props} />
}
