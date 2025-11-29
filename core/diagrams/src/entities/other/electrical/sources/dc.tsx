import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DC = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.signal_sources.dc_source_1;',
  },
  _original_width: 70,
  _original_height: 75,
}

export function Dc(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DC)} />
}
