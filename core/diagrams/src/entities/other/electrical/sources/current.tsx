import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CURRENT = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.signal_sources.current_source;',
  },
  _width: 40,
  _height: 60,
}

export function Current(props: NodeProps) {
  return <Shape {...CURRENT} {...props} _style={extendStyle(CURRENT, props)} />
}
