import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SOCIAL_SERVICES = {
  _style:
    'shape=mxgraph.signs.healthcare.social_services;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 99,
  _height: 98,
}

export function SocialServices(props: DiagramNodeProps) {
  return <Shape {...SOCIAL_SERVICES} {...props} />
}
