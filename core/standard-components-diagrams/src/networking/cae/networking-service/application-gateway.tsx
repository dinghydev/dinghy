import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const APPLICATION_GATEWAY = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Application_Gateway.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function ApplicationGateway(props: DiagramNodeProps) {
  return (
    <Shape
      {...APPLICATION_GATEWAY}
      {...props}
      _style={extendStyle(APPLICATION_GATEWAY, props)}
    />
  )
}
