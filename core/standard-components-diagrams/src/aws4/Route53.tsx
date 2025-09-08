import { Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ROUTE53_COLOR = '#8C4FFF'
export const ROUTE53 = {
  _shape: { entity: 'mxgraph.aws4.route_53' },
  _style: {
    element: {
      strokeColor: ROUTE53_COLOR,
      fontColor: ROUTE53_COLOR,
    },
    entity: {
      fillColor: ROUTE53_COLOR,
    },
  },
}

export function Route53(props: DiagramNodeProps) {
  return <Shape {...ROUTE53} {...props} />
}
