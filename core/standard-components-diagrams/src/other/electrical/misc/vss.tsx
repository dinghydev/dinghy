import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VSS = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.signal_sources.vss2;fontSize=24;flipV=1;',
  _width: 60,
  _height: 40,
}

export function Vss(props: DiagramNodeProps) {
  return <Shape {...VSS} {...props} _style={extendStyle(VSS, props)} />
}
