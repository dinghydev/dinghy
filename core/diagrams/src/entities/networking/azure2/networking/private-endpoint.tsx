import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PRIVATE_ENDPOINT = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Private_Endpoint.svg;strokeColor=none;',
  },
  _original_width: 72,
  _original_height: 66,
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
