import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SEARCH_SERVER = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.search_server;',
  },
  _original_width: 40,
  _original_height: 52,
}

export function SearchServer(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SEARCH_SERVER)} />
}
