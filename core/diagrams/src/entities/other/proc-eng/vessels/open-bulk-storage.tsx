import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const OPEN_BULK_STORAGE = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.open_bulk_storage;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 100,
  _height: 50,
}

export function OpenBulkStorage(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, OPEN_BULK_STORAGE)} />
}
