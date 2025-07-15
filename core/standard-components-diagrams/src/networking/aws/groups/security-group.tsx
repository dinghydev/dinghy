import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SECURITY_GROUP = {
  _style: {
    group:
      'fillColor=none;strokeColor=#DD3522;verticalAlign=top;fontStyle=0;fontColor=#DD3522;whiteSpace=wrap;html=1;',
    entity: {
      strokeColor: '#DD3522',
      fontColor: '#DD3522',
    },
  },
}

export function SecurityGroup(props: DiagramNodeProps) {
  return <Shape {...SECURITY_GROUP} {...props} />
}
