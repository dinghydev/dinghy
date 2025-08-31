import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STORAGE_ROUTER = {
  _style:
    'shape=mxgraph.cisco.routers.storage_router;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 69,
  _height: 51,
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
