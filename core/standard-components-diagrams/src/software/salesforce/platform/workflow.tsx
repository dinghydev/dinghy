import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WORKFLOW = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.workflow;',
  _width: 60,
  _height: 60,
}

export function Workflow(props: DiagramNodeProps) {
  return <Shape {...WORKFLOW} {...props} />
}
