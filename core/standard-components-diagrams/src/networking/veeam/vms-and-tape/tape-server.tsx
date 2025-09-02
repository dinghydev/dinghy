import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TAPE_SERVER = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.tape_server;',
  },
  _original_width: 76,
  _original_height: 72,
}

export function TapeServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...TAPE_SERVER}
      {...props}
      _style={extendStyle(TAPE_SERVER, props)}
    />
  )
}
