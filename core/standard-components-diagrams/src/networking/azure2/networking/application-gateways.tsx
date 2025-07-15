import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const APPLICATION_GATEWAYS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Application_Gateways.svg;',
  _width: 64,
  _height: 64,
}

export function ApplicationGateways(props: DiagramNodeProps) {
  return <Shape {...APPLICATION_GATEWAYS} {...props} />
}
