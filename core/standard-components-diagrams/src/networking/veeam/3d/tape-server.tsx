import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TAPE_SERVER = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.tape_server;',
  },
  _original_width: 46,
  _original_height: 46,
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
