import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GAUGE = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;strokeWidth=1;shape=mxgraph.mockup.graphics.gauge;fillColor=#ffffff;strokeColor=#999999;gaugePos=25;scaleColors=#bbddff,#ddeeff,#99ccff;gaugeLabels=,,;needleColor=#008cff;',
  _width: 100,
  _height: 100,
}

export function Gauge(props: DiagramNodeProps) {
  return <Shape {...GAUGE} {...props} />
}
