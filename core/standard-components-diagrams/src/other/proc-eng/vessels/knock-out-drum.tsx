import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const KNOCK_OUT_DRUM = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.knock-out_drum;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 51,
  _original_height: 95,
}

export function KnockOutDrum(props: DiagramNodeProps) {
  return (
    <Shape
      {...KNOCK_OUT_DRUM}
      {...props}
      _style={extendStyle(KNOCK_OUT_DRUM, props)}
    />
  )
}
