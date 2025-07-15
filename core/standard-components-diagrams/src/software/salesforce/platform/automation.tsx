import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AUTOMATION = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.automation;',
  _width: 60,
  _height: 58.199999999999996,
}

export function Automation(props: DiagramNodeProps) {
  return <Shape {...AUTOMATION} {...props} />
}
