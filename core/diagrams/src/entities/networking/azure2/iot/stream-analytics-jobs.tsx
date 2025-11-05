import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const STREAM_ANALYTICS_JOBS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/iot/Stream_Analytics_Jobs.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 57.99999999999999,
}

export function StreamAnalyticsJobs(props: NodeProps) {
  return (
    <Shape
      {...STREAM_ANALYTICS_JOBS}
      {...props}
      _style={extendStyle(STREAM_ANALYTICS_JOBS, props)}
    />
  )
}
