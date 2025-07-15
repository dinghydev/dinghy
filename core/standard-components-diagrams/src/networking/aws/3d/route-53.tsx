import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ROUTE_53 = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=1;align=center;outlineConnect=0;dashed=0;outlineConnect=0;shape=mxgraph.aws3d.route53;fillColor=#ECECEC;strokeColor=#5E5E5E;aspect=fixed;',
  _width: 117.17,
  _height: 134.4,
}

export function Route53(props: DiagramNodeProps) {
  return <Shape {...ROUTE_53} {...props} />
}
