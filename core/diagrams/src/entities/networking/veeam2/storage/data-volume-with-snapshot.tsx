import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATA_VOLUME_WITH_SNAPSHOT = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.data_volume_with_snapshot;',
  },
  _width: 43,
  _height: 15,
}

export function DataVolumeWithSnapshot(props: NodeProps) {
  return (
    <Shape
      {...DATA_VOLUME_WITH_SNAPSHOT}
      {...props}
      _style={extendStyle(DATA_VOLUME_WITH_SNAPSHOT, props)}
    />
  )
}
