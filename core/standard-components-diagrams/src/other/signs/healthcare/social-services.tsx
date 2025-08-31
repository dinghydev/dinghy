import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SOCIAL_SERVICES = {
  _style: {
    entity:
      'shape=mxgraph.signs.healthcare.social_services;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 99,
  _height: 98,
}

export function SocialServices(props: DiagramNodeProps) {
  return (
    <Shape
      {...SOCIAL_SERVICES}
      {...props}
      _style={extendStyle(SOCIAL_SERVICES, props)}
    />
  )
}
