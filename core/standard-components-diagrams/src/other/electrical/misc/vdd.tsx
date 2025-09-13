import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VDD = {
  _style: {
    entity:
      'verticalLabelPosition=top;verticalAlign=bottom;shape=mxgraph.electrical.signal_sources.vdd;shadow=0;dashed=0;align=center;strokeWidth=1;fontSize=24;html=1;flipV=1;',
  },
  _width: 60,
  _height: 40,
}

export function Vdd(props: DiagramNodeProps) {
  return <Shape {...VDD} {...props} _style={extendStyle(VDD, props)} />
}
