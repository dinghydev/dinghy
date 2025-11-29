import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SYNCHRO = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.rot_mech.synchro;',
  },
  _width: 80,
  _height: 100,
}

export function Synchro(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SYNCHRO)} />
}
