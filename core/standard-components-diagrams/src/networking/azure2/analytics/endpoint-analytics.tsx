import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ENDPOINT_ANALYTICS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/analytics/Endpoint_Analytics.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function EndpointAnalytics(props: DiagramNodeProps) {
  return (
    <Shape
      {...ENDPOINT_ANALYTICS}
      {...props}
      _style={extendStyle(ENDPOINT_ANALYTICS, props)}
    />
  )
}
