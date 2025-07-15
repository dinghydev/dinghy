import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MANUFACTURING_2 = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.manufacturing2;',
  _width: 60,
  _height: 60,
}

export function Manufacturing2(props: DiagramNodeProps) {
  return <Shape {...MANUFACTURING_2} {...props} />
}
