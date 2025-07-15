import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SEPARATOR_VENTURI_SCRUBBER = {
  _style:
    'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.separators.separator_(venturi_scrubber);',
  _width: 80,
  _height: 120,
}

export function SeparatorVenturiScrubber(props: DiagramNodeProps) {
  return <Shape {...SEPARATOR_VENTURI_SCRUBBER} {...props} />
}
