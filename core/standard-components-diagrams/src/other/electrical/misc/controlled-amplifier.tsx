import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONTROLLED_AMPLIFIER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.abstract.controlled_amplifier;',
  },
  _original_width: 100,
  _original_height: 90,
}

export function ControlledAmplifier(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONTROLLED_AMPLIFIER}
      {...props}
      _style={extendStyle(CONTROLLED_AMPLIFIER, props)}
    />
  )
}
