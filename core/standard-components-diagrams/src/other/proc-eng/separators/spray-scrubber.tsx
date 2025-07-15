import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SPRAY_SCRUBBER = {
  _style:
    'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.separators.spray_scrubber;',
  _width: 80,
  _height: 120,
}

export function SprayScrubber(props: DiagramNodeProps) {
  return <Shape {...SPRAY_SCRUBBER} {...props} />
}
