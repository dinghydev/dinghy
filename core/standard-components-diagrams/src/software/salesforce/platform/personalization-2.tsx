import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PERSONALIZATION_2 = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.personalization2;',
  _width: 60,
  _height: 60,
}

export function Personalization2(props: DiagramNodeProps) {
  return <Shape {...PERSONALIZATION_2} {...props} />
}
