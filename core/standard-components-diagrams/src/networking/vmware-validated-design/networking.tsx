import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NETWORKING = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#434445;aspect=fixed;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.vvd.networking;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function Networking(props: DiagramNodeProps) {
  return (
    <Shape {...NETWORKING} {...props} _style={extendStyle(NETWORKING, props)} />
  )
}
