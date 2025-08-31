import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PRIVATE_ENDPOINT = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Private_Endpoint.svg;strokeColor=none;',
  },
  _width: 72,
  _height: 66,
}

export function PrivateEndpoint(props: DiagramNodeProps) {
  return (
    <Shape
      {...PRIVATE_ENDPOINT}
      {...props}
      _style={extendStyle(PRIVATE_ENDPOINT, props)}
    />
  )
}
