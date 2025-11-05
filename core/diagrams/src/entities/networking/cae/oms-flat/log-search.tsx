import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LOG_SEARCH = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#505050;shape=mxgraph.mscae.oms.log_search',
  },
  _original_width: 50,
  _original_height: 50,
}

export function LogSearch(props: NodeProps) {
  return (
    <Shape {...LOG_SEARCH} {...props} _style={extendStyle(LOG_SEARCH, props)} />
  )
}
