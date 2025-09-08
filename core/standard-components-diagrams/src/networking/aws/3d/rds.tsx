import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const RDS = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=1;align=center;outlineConnect=0;dashed=0;outlineConnect=0;shape=mxgraph.aws3d.rds;fillColor=#ECECEC;strokeColor=#5E5E5E;aspect=fixed;',
  },
  _original_width: 123,
  _original_height: 133,
}

export function Rds(props: DiagramNodeProps) {
  return <Shape {...RDS} {...props} _style={extendStyle(RDS, props)} />
}
