import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MOUNT_SERVER = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.mount_server;',
  },
  _original_width: 40,
  _original_height: 52,
}

export function MountServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...MOUNT_SERVER}
      {...props}
      _style={extendStyle(MOUNT_SERVER, props)}
    />
  )
}
