import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const OPEN_DISC = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.fittings.open_disc;',
  },
  _width: 40,
  _height: 140,
}

export function OpenDisc(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, OPEN_DISC)} />
}
