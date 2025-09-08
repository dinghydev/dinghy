import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const IGNITER_PLUG = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.igniter_plug2',
  },
  _original_width: 72,
  _original_height: 39,
}

export function IgniterPlug(props: DiagramNodeProps) {
  return (
    <Shape
      {...IGNITER_PLUG}
      {...props}
      _style={extendStyle(IGNITER_PLUG, props)}
    />
  )
}
