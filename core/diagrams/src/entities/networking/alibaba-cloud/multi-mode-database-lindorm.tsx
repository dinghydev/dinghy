import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MULTI_MODE_DATABASE_LINDORM = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.multi-mode_database_lindorm;',
  },
  _original_width: 47.400000000000006,
  _original_height: 50.099999999999994,
}

export function MultiModeDatabaseLindorm(props: DiagramNodeProps) {
  return (
    <Shape
      {...MULTI_MODE_DATABASE_LINDORM}
      {...props}
      _style={extendStyle(MULTI_MODE_DATABASE_LINDORM, props)}
    />
  )
}
