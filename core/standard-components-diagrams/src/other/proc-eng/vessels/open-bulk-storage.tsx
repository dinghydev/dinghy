import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OPEN_BULK_STORAGE = {
  _style:
    'shape=mxgraph.pid.vessels.open_bulk_storage;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 100,
  _height: 50,
}

export function OpenBulkStorage(props: DiagramNodeProps) {
  return (
    <Shape
      {...OPEN_BULK_STORAGE}
      {...props}
      _style={extendStyle(OPEN_BULK_STORAGE, props)}
    />
  )
}
