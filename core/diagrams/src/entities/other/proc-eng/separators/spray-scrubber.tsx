import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SPRAY_SCRUBBER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.separators.spray_scrubber;',
  },
  _width: 80,
  _height: 120,
}

export function SprayScrubber(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SPRAY_SCRUBBER)} />
}
