import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CURRENT = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.signal_sources.current_source;',
  _width: 40,
  _height: 60,
}

export function Current(props: DiagramNodeProps) {
  return <Shape {...CURRENT} {...props} _style={extendStyle(CURRENT, props)} />
}
