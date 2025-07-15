import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DATA_LAKE_ANALYTICS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/analytics/Data_Lake_Analytics.svg;',
  _width: 68,
  _height: 68,
}

export function DataLakeAnalytics(props: DiagramNodeProps) {
  return <Shape {...DATA_LAKE_ANALYTICS} {...props} />
}
