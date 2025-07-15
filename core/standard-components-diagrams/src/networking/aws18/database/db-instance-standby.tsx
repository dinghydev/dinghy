import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DB_INSTANCE_STANDBY = {
  _style:
    'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;strokeColor=#232F3E;fillColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.db_instance_standby;',
  _width: 60,
  _height: 60,
}

export function DbInstanceStandby(props: DiagramNodeProps) {
  return <Shape {...DB_INSTANCE_STANDBY} {...props} />
}
