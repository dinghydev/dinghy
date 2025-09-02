import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OPEN_BULK_STORAGE = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.open_bulk_storage;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 100,
  _original_height: 50,
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
