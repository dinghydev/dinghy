import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CROSS_FUNCTIONAL_FLOWCHART = {
  _style:
    'shape=table;childLayout=tableLayout;startSize=40;collapsible=0;recursiveResize=0;expand=0;fontSize=16;',
  _width: 400,
  _height: 400,
}

export function CrossFunctionalFlowchart(props: DiagramNodeProps) {
  return <Shape {...CROSS_FUNCTIONAL_FLOWCHART} {...props} />
}
