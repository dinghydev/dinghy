import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ONE_SERVER = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.one_server;',
  },
  _original_width: 40,
  _original_height: 52,
}

export function OneServer(props: DiagramNodeProps) {
  return (
    <Shape {...ONE_SERVER} {...props} _style={extendStyle(ONE_SERVER, props)} />
  )
}
