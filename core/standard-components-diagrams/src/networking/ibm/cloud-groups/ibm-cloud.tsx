import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IBM_CLOUD = {
  _style: {
    group:
      'container=1;collapsible=0;expand=0;recursiveResize=0;html=1;whiteSpace=wrap;strokeColor=#1192E8;fillColor=none;strokeWidth=1',
    entity: {
      strokeColor: '#1192E8',
    },
  },
}

export function IbmCloud(props: DiagramNodeProps) {
  return (
    <Shape {...IBM_CLOUD} {...props} _style={extendStyle(IBM_CLOUD, props)} />
  )
}
