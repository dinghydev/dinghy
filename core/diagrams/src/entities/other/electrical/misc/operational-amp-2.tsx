import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const OPERATIONAL_AMP_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.abstract.operational_amp_2;',
  },
  _original_width: 98,
  _original_height: 90,
}

export function OperationalAmp2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, OPERATIONAL_AMP_2)} />
}
