import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CROSS_FUNCTIONAL_FLOWCHART = {
  _style: {
    entity:
      'shape=table;childLayout=tableLayout;startSize=40;collapsible=0;recursiveResize=0;expand=0;fontSize=16;',
  },
  _original_width: 400,
  _original_height: 400,
}

export function CrossFunctionalFlowchart(props: DiagramNodeProps) {
  return (
    <Shape
      {...CROSS_FUNCTIONAL_FLOWCHART}
      {...props}
      _style={extendStyle(CROSS_FUNCTIONAL_FLOWCHART, props)}
    />
  )
}
