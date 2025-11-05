import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const POWERPOINT = {
  _style: {
    entity:
      'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;shape=mxgraph.mscae.other.powerpoint;fillColor=#DE5D24;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function Powerpoint(props: NodeProps) {
  return (
    <Shape {...POWERPOINT} {...props} _style={extendStyle(POWERPOINT, props)} />
  )
}
