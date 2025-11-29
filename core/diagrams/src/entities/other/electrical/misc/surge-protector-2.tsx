import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SURGE_PROTECTOR_2 = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.surge_protector_2;',
  },
  _width: 70,
  _height: 24,
}

export function SurgeProtector2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SURGE_PROTECTOR_2)} />
}
