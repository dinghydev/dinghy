import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RDS_DB_INSTANCE_STANDBY_MULTI_AZ = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.rds_db_instance_standby_multi_az;fillColor=#2E73B8;gradientColor=none;',
  _width: 49.5,
  _height: 66,
}

export function RdsDbInstanceStandbyMultiAz(props: DiagramNodeProps) {
  return (
    <Shape
      {...RDS_DB_INSTANCE_STANDBY_MULTI_AZ}
      {...props}
      _style={extendStyle(RDS_DB_INSTANCE_STANDBY_MULTI_AZ, props)}
    />
  )
}
