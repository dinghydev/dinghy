import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TIME_SERIES_INSIGHTS_EVENT_SOURCES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/iot/Time_Series_Insights_Event_Sources.svg;strokeColor=none;',
  },
  _width: 67,
  _height: 68,
}

export function TimeSeriesInsightsEventSources(props: DiagramNodeProps) {
  return (
    <Shape
      {...TIME_SERIES_INSIGHTS_EVENT_SOURCES}
      {...props}
      _style={extendStyle(TIME_SERIES_INSIGHTS_EVENT_SOURCES, props)}
    />
  )
}
