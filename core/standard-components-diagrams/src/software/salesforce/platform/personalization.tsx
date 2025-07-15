import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PERSONALIZATION = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.personalization;',
  _width: 60,
  _height: 45,
}

export function Personalization(props: DiagramNodeProps) {
  return <Shape {...PERSONALIZATION} {...props} />
}
