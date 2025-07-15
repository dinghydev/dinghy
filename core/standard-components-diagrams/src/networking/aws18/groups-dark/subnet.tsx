import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SUBNET = {
  _style: {
    group:
      'sketch=0;outlineConnect=0;gradientColor=none;html=1;whiteSpace=wrap;fontSize=12;fontStyle=0;shape=mxgraph.aws4.group;grIcon=mxgraph.aws4.group_subnet;strokeColor=#E8E8E8;fillColor=none;verticalAlign=top;align=left;spacingLeft=30;fontColor=#E8E8E8;dashed=0;',
    entity: {
      strokeColor: '#E8E8E8',
      fontColor: '#E8E8E8',
    },
  },
}

export function Subnet(props: DiagramNodeProps) {
  return <Shape {...SUBNET} {...props} />
}
