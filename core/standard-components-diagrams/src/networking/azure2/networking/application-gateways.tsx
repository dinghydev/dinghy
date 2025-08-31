import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const APPLICATION_GATEWAYS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Application_Gateways.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function ApplicationGateways(props: DiagramNodeProps) {
  return (
    <Shape
      {...APPLICATION_GATEWAYS}
      {...props}
      _style={extendStyle(APPLICATION_GATEWAYS, props)}
    />
  )
}
