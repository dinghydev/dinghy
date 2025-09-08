import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PERFORMANCE_MONITOR = {
  _style: {
    entity:
      'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.mscae.enterprise.performance_monitor',
  },
  _original_width: 50,
  _original_height: 36,
}

export function PerformanceMonitor(props: DiagramNodeProps) {
  return (
    <Shape
      {...PERFORMANCE_MONITOR}
      {...props}
      _style={extendStyle(PERFORMANCE_MONITOR, props)}
    />
  )
}
