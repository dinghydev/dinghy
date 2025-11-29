import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const APPLICATION_STORE = {
  _style: {
    entity:
      'sketch=0;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.databases.application_store;',
  },
  _original_width: 49,
  _original_height: 53,
}

export function ApplicationStore(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, APPLICATION_STORE)} />
}
