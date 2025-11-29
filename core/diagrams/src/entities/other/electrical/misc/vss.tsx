import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VSS = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.signal_sources.vss2;fontSize=24;flipV=1;',
  },
  _width: 60,
  _height: 40,
}

export function Vss(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, VSS)} />
}
