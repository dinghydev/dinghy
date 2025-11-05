import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const RDS = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.rds;fillColor=#2E73B8;gradientColor=none;',
  },
  _original_width: 72,
  _original_height: 81,
}

export function Rds(props: NodeProps) {
  return <Shape {...RDS} {...props} _style={extendStyle(RDS, props)} />
}
