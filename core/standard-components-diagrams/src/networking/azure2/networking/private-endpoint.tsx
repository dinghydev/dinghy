import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PRIVATE_ENDPOINT = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Private_Endpoint.svg;',
  _width: 72,
  _height: 66,
}

export function PrivateEndpoint(props: DiagramNodeProps) {
  return <Shape {...PRIVATE_ENDPOINT} {...props} />
}
