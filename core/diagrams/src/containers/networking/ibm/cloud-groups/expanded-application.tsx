import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const EXPANDED_APPLICATION = {
  _style: {
    container:
      'container=1;collapsible=0;expand=0;recursiveResize=0;html=1;whiteSpace=wrap;strokeColor=#A56EFF;fillColor=none;',
    entity: {
      strokeColor: '#A56EFF',
    },
  },
}

export function ExpandedApplication(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, EXPANDED_APPLICATION)} />
}
