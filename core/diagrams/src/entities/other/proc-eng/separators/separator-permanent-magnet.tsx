import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SEPARATOR_PERMANENT_MAGNET = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.separators.separator_(permanent_magnet)2;',
  },
  _width: 80,
  _height: 120,
}

export function SeparatorPermanentMagnet(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, SEPARATOR_PERMANENT_MAGNET)} />
  )
}
