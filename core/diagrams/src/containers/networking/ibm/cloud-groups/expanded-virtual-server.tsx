import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const EXPANDED_VIRTUAL_SERVER = {
  _style: {
    container:
      'container=1;collapsible=0;expand=0;recursiveResize=0;html=1;whiteSpace=wrap;strokeColor=#198038;fillColor=none;',
    entity: {
      strokeColor: '#198038',
    },
  },
}

export function ExpandedVirtualServer(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, EXPANDED_VIRTUAL_SERVER)} />
  )
}
