import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VSS = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.signal_sources.vss2;fontSize=24;flipV=1;',
  },
  _original_width: 60,
  _original_height: 40,
}

export function Vss(props: DiagramNodeProps) {
  return <Shape {...VSS} {...props} _style={extendStyle(VSS, props)} />
}
