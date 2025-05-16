import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CLOUDWATCH_METRICS_INSIGHTS = {
  _color: { color: '#E7157B', fill: true },
  _border: 1,
  _shape: 'mxgraph.aws4.cloudwatch_metrics_insights',
}

export function CloudwatchMetricsInsights(props: DiagramNodeProps) {
  return <Shape {...CLOUDWATCH_METRICS_INSIGHTS} {...props} />
}
