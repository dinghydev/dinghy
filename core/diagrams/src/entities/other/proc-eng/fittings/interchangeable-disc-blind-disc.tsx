import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INTERCHANGEABLE_DISC_BLIND_DISC = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.fittings.interchangeable_disc_(blind_disc)2;',
  },
  _width: 40,
  _height: 140,
}

export function InterchangeableDiscBlindDisc(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, INTERCHANGEABLE_DISC_BLIND_DISC)}
    />
  )
}
