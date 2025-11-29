import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BLIND_DISC = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.fittings.blind_disc2;',
  },
  _width: 40,
  _height: 140,
}

export function BlindDisc(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BLIND_DISC)} />
}
