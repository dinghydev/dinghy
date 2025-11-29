import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PENTODE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.thermionic_devices.pentode;',
  },
  _original_width: 70,
  _original_height: 77,
}

export function Pentode(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PENTODE)} />
}
