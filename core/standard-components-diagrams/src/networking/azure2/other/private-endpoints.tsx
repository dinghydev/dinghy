import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PRIVATE_ENDPOINTS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Private_Endpoints.svg;',
  _width: 68,
  _height: 64.68,
}

export function PrivateEndpoints(props: DiagramNodeProps) {
  return <Shape {...PRIVATE_ENDPOINTS} {...props} />
}
