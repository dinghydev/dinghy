import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STREAM_ANALYTICS_JOBS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/analytics/Stream_Analytics_Jobs.svg;',
  _width: 68,
  _height: 57.99999999999999,
}

export function StreamAnalyticsJobs(props: DiagramNodeProps) {
  return <Shape {...STREAM_ANALYTICS_JOBS} {...props} />
}
