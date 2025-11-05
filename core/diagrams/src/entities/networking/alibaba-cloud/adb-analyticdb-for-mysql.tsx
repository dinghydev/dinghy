import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ADB_ANALYTICDB_FOR_MYSQL = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.adb_analyticdb_for_mysql;',
  },
  _original_width: 48.9,
  _original_height: 54.900000000000006,
}

export function AdbAnalyticdbForMysql(props: NodeProps) {
  return (
    <Shape
      {...ADB_ANALYTICDB_FOR_MYSQL}
      {...props}
      _style={extendStyle(ADB_ANALYTICDB_FOR_MYSQL, props)}
    />
  )
}
