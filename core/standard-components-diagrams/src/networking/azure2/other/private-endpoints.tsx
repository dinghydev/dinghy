import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PRIVATE_ENDPOINTS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Private_Endpoints.svg;strokeColor=none;',
  },
  _width: 68,
  _height: 64.68,
}

export function PrivateEndpoints(props: DiagramNodeProps) {
  return (
    <Shape
      {...PRIVATE_ENDPOINTS}
      {...props}
      _style={extendStyle(PRIVATE_ENDPOINTS, props)}
    />
  )
}
