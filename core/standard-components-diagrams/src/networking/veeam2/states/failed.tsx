import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FAILED = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#DF8C42;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.failed;',
  },
  _original_width: 21,
  _original_height: 21,
}

export function Failed(props: DiagramNodeProps) {
  return <Shape {...FAILED} {...props} _style={extendStyle(FAILED, props)} />
}
