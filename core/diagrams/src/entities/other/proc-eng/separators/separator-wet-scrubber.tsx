import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SEPARATOR_WET_SCRUBBER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.separators.separator_(wet_scrubber)2;',
  },
  _width: 80,
  _height: 120,
}

export function SeparatorWetScrubber(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, SEPARATOR_WET_SCRUBBER)} />
  )
}
