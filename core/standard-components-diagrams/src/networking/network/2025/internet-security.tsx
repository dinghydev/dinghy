import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INTERNET_SECURITY = {
  _style:
    'shape=mxgraph.networks2.icon;aspect=fixed;fillColor=#EDEDED;strokeColor=#000000;gradientColor=#5B6163;network2IconShadow=1;network2bgFillColor=none;network2Icon=mxgraph.networks2.internet_security;network2IconW=1;network2IconH=1;',
  _width: 50,
  _height: 50,
}

export function InternetSecurity(props: DiagramNodeProps) {
  return <Shape {...INTERNET_SECURITY} {...props} />
}
