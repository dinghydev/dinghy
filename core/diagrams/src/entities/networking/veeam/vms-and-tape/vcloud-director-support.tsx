import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VCLOUD_DIRECTOR_SUPPORT = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.vcloud_director_support;',
  },
  _original_width: 44.8,
  _original_height: 44.8,
}

export function VcloudDirectorSupport(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, VCLOUD_DIRECTOR_SUPPORT)} />
  )
}
