import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATA_LAKE_ANALYTICS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/analytics/Data_Lake_Analytics.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
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
