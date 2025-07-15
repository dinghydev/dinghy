import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WEB_2 = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.web2;',
  _width: 60,
  _height: 60,
}

export function Web2(props: DiagramNodeProps) {
  return <Shape {...WEB_2} {...props} />
}
