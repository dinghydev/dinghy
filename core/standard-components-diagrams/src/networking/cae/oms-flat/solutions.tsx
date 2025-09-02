import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SOLUTIONS = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#505050;shape=mxgraph.mscae.oms.solutions',
  },
  _original_width: 50,
  _original_height: 49,
}

export function Solutions(props: DiagramNodeProps) {
  return (
    <Shape {...SOLUTIONS} {...props} _style={extendStyle(SOLUTIONS, props)} />
  )
}
