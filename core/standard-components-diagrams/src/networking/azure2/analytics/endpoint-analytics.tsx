import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ENDPOINT_ANALYTICS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/analytics/Endpoint_Analytics.svg;strokeColor=none;',
  _width: 68,
  _height: 68,
}

export function EndpointAnalytics(props: DiagramNodeProps) {
  return <Shape {...ENDPOINT_ANALYTICS} {...props} />
}
