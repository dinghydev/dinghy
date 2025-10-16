import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const EFS_SHARE = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.efs_share;fillColor=#E05243;gradientColor=none;',
  },
  _original_width: 69,
  _original_height: 63,
}

export function EfsShare(props: DiagramNodeProps) {
  return (
    <Shape {...EFS_SHARE} {...props} _style={extendStyle(EFS_SHARE, props)} />
  )
}
