import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const STORAGE_ROUTER = {
  _style: {
    entity:
      'shape=mxgraph.cisco.routers.storage_router;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 69,
  _original_height: 51,
}

export function StorageRouter(props: DiagramNodeProps) {
  return (
    <Shape
      {...STORAGE_ROUTER}
      {...props}
      _style={extendStyle(STORAGE_ROUTER, props)}
    />
  )
}
