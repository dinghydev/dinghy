import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const APPLICATION_GATEWAYS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Application_Gateways.svg;strokeColor=none;',
  },
  _original_width: 64,
  _original_height: 64,
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
