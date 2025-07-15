import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NETQ_AGENT = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;fontSize=12;verticalAlign=top;fontColor=#364149;shadow=0;dashed=0;image=img/lib/cumulus/netq_agent.svg;',
  _width: 18,
  _height: 18,
}

export function NetqAgent(props: DiagramNodeProps) {
  return <Shape {...NETQ_AGENT} {...props} />
}
