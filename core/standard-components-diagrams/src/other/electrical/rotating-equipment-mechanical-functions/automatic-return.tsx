import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const AUTOMATIC_RETURN = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.rot_mech.automatic_return;pointerEvents=1;',
  },
  _original_width: 100,
  _original_height: 12,
}

export function AutomaticReturn(props: DiagramNodeProps) {
  return (
    <Shape
      {...AUTOMATIC_RETURN}
      {...props}
      _style={extendStyle(AUTOMATIC_RETURN, props)}
    />
  )
}
