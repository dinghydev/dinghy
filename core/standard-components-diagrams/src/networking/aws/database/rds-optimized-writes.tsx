import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const RDS_OPTIMIZED_WRITES = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#C925D1;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.rds_optimized_writes;',
  },
  _original_width: 78,
  _original_height: 78,
}

export function RdsOptimizedWrites(props: DiagramNodeProps) {
  return (
    <Shape
      {...RDS_OPTIMIZED_WRITES}
      {...props}
      _style={extendStyle(RDS_OPTIMIZED_WRITES, props)}
    />
  )
}
