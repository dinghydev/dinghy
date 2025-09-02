import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TRANSPORT = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.transport;',
  },
  _original_width: 38,
  _original_height: 23,
}

export function Transport(props: DiagramNodeProps) {
  return (
    <Shape {...TRANSPORT} {...props} _style={extendStyle(TRANSPORT, props)} />
  )
}
