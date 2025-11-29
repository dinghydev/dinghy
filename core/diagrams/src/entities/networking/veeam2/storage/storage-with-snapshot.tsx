import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const STORAGE_WITH_SNAPSHOT = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.storage_with_snapshot;',
  },
  _width: 43,
  _height: 15,
}

export function StorageWithSnapshot(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, STORAGE_WITH_SNAPSHOT)} />
}
