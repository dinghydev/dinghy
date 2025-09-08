import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VENT_COVER = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.vent_(cover);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 10,
  _original_height: 20,
}

export function VentCover(props: DiagramNodeProps) {
  return (
    <Shape {...VENT_COVER} {...props} _style={extendStyle(VENT_COVER, props)} />
  )
}
