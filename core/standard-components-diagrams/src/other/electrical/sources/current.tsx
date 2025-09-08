import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CURRENT = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.signal_sources.current_source;',
  },
  _original_width: 40,
  _original_height: 60,
}

export function Current(props: DiagramNodeProps) {
  return <Shape {...CURRENT} {...props} _style={extendStyle(CURRENT, props)} />
}
