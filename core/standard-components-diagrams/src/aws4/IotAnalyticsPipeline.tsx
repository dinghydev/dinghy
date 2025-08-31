import { Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IOT_ANALYTICS_PIPELINE = {
  _color: { color: '#7AA116', fill: true },
  _border: 1,
  _shape: 'mxgraph.aws4.iot_analytics_pipeline',
}

export function IotAnalyticsPipeline(props: DiagramNodeProps) {
  return <Shape {...IOT_ANALYTICS_PIPELINE} {...props} />
}
