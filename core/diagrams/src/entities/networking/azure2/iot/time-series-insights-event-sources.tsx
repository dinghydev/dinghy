import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TIME_SERIES_INSIGHTS_EVENT_SOURCES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/iot/Time_Series_Insights_Event_Sources.svg;strokeColor=none;',
  },
  _original_width: 67,
  _original_height: 68,
}

export function TimeSeriesInsightsEventSources(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, TIME_SERIES_INSIGHTS_EVENT_SOURCES)}
    />
  )
}
