import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const KEEP_DRY = {
  _style: {
    entity:
      'shape=mxgraph.signs.safety.keep_dry;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 83,
  _original_height: 99,
}

export function KeepDry(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, KEEP_DRY)} />
}
