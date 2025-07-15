import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AUTOMATION_2 = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.automation2;',
  _width: 60,
  _height: 60,
}

export function Automation2(props: DiagramNodeProps) {
  return <Shape {...AUTOMATION_2} {...props} />
}
