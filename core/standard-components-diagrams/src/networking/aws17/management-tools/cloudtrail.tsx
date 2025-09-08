import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CLOUDTRAIL = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.cloudtrail;fillColor=#759C3E;gradientColor=none;',
  },
  _original_width: 76.5,
  _original_height: 93,
}

export function Cloudtrail(props: DiagramNodeProps) {
  return (
    <Shape {...CLOUDTRAIL} {...props} _style={extendStyle(CLOUDTRAIL, props)} />
  )
}
