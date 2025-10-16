import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const NEON_LAMP = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.neon_lamp_2;',
  },
  _original_width: 60,
  _original_height: 50,
}

export function NeonLamp(props: DiagramNodeProps) {
  return (
    <Shape {...NEON_LAMP} {...props} _style={extendStyle(NEON_LAMP, props)} />
  )
}
