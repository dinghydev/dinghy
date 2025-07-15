import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PERFORMANCE_MONITOR = {
  _style:
    'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.mscae.enterprise.performance_monitor',
  _width: 50,
  _height: 36,
}

export function PerformanceMonitor(props: DiagramNodeProps) {
  return <Shape {...PERFORMANCE_MONITOR} {...props} />
}
