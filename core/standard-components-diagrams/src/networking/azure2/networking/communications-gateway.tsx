import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMMUNICATIONS_GATEWAY = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Azure_Communications_Gateway.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function CommunicationsGateway(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMMUNICATIONS_GATEWAY}
      {...props}
      _style={extendStyle(COMMUNICATIONS_GATEWAY, props)}
    />
  )
}
