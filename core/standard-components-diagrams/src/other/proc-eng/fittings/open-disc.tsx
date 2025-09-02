import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OPEN_DISC = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.fittings.open_disc;',
  },
  _original_width: 40,
  _original_height: 140,
}

export function OpenDisc(props: DiagramNodeProps) {
  return (
    <Shape {...OPEN_DISC} {...props} _style={extendStyle(OPEN_DISC, props)} />
  )
}
