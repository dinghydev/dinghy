import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TRACK_CHANGES = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#505050;shape=mxgraph.mscae.oms.track_changes',
  },
  _original_width: 42,
  _original_height: 50,
}

export function TrackChanges(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TRACK_CHANGES)} />
}
