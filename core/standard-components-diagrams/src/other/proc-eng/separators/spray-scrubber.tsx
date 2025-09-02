import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SPRAY_SCRUBBER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.separators.spray_scrubber;',
  },
  _original_width: 80,
  _original_height: 120,
}

export function SprayScrubber(props: DiagramNodeProps) {
  return (
    <Shape
      {...SPRAY_SCRUBBER}
      {...props}
      _style={extendStyle(SPRAY_SCRUBBER, props)}
    />
  )
}
