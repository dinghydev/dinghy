import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SHARED_PROCESS = {
  _style: {
    entity:
      'strokeWidth=2;html=1;shape=mxgraph.lean_mapping.manufacturing_process_shared;spacingTop=-5;align=center;whiteSpace=wrap;verticalAlign=top;',
  },
  _original_width: 100,
  _original_height: 70,
}

export function SharedProcess(props: DiagramNodeProps) {
  return (
    <Shape
      {...SHARED_PROCESS}
      {...props}
      _style={extendStyle(SHARED_PROCESS, props)}
    />
  )
}
