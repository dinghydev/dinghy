import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const IBM_CLOUD = {
  _style: {
    container:
      'container=1;collapsible=0;expand=0;recursiveResize=0;html=1;whiteSpace=wrap;strokeColor=#1192E8;fillColor=none;strokeWidth=1',
    entity: {
      strokeColor: '#1192E8',
    },
  },
}

export function IbmCloud(props: NodeProps) {
  return (
    <Shape {...IBM_CLOUD} {...props} _style={extendStyle(IBM_CLOUD, props)} />
  )
}
