import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const RDS_MASTER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=1;align=center;outlineConnect=0;dashed=0;outlineConnect=0;shape=mxgraph.aws3d.rdsMaster;fillColor=#ECECEC;strokeColor=#5E5E5E;aspect=fixed;',
  },
  _width: 123,
  _height: 133,
}

export function RdsMaster(props: DiagramNodeProps) {
  return (
    <Shape {...RDS_MASTER} {...props} _style={extendStyle(RDS_MASTER, props)} />
  )
}
