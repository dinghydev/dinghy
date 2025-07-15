import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TIME_SERIES_INSIGHTS_EVENT_SOURCES = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/iot/Time_Series_Insights_Event_Sources.svg;',
  _width: 67,
  _height: 68,
}

export function TimeSeriesInsightsEventSources(props: DiagramNodeProps) {
  return <Shape {...TIME_SERIES_INSIGHTS_EVENT_SOURCES} {...props} />
}
