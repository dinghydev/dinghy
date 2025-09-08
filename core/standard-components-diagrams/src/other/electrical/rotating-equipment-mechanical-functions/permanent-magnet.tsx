import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PERMANENT_MAGNET = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.permanent_magnet;pointerEvents=1;',
  },
  _original_width: 20,
  _original_height: 70,
}

export function PermanentMagnet(props: DiagramNodeProps) {
  return (
    <Shape
      {...PERMANENT_MAGNET}
      {...props}
      _style={extendStyle(PERMANENT_MAGNET, props)}
    />
  )
}
