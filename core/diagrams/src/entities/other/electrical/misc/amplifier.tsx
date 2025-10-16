import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const AMPLIFIER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.abstract.amplifier;',
  },
  _original_width: 90,
  _original_height: 100,
}

export function Amplifier(props: DiagramNodeProps) {
  return (
    <Shape {...AMPLIFIER} {...props} _style={extendStyle(AMPLIFIER, props)} />
  )
}
