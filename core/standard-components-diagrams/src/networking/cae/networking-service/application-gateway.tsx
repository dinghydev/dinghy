import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const APPLICATION_GATEWAY = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Application_Gateway.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 50,
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
