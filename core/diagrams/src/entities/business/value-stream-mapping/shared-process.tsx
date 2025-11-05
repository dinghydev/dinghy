import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SHARED_PROCESS = {
  _style: {
    entity:
      'strokeWidth=2;html=1;shape=mxgraph.lean_mapping.manufacturing_process_shared;spacingTop=-5;align=center;whiteSpace=wrap;verticalAlign=top;',
  },
  _width: 100,
  _height: 70,
}

export function SharedProcess(props: NodeProps) {
  return (
    <Shape
      {...SHARED_PROCESS}
      {...props}
      _style={extendStyle(SHARED_PROCESS, props)}
    />
  )
}
