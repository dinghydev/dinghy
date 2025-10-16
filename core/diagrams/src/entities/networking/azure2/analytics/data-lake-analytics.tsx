import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DATA_LAKE_ANALYTICS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/analytics/Data_Lake_Analytics.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function DataLakeAnalytics(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATA_LAKE_ANALYTICS}
      {...props}
      _style={extendStyle(DATA_LAKE_ANALYTICS, props)}
    />
  )
}
