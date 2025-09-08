import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FLOURESCENT_LAMP = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.flourescent_lamp',
  },
  _original_width: 80,
  _original_height: 30,
}

export function FlourescentLamp(props: DiagramNodeProps) {
  return (
    <Shape
      {...FLOURESCENT_LAMP}
      {...props}
      _style={extendStyle(FLOURESCENT_LAMP, props)}
    />
  )
}
