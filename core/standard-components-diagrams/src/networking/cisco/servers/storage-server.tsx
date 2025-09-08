import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const STORAGE_SERVER = {
  _style: {
    entity:
      'shape=mxgraph.cisco.servers.storage_server;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 54,
  _original_height: 83,
}

export function StorageServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...STORAGE_SERVER}
      {...props}
      _style={extendStyle(STORAGE_SERVER, props)}
    />
  )
}
