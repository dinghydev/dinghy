import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SEPARATOR_WET_SCRUBBER = {
  _style:
    'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.separators.separator_(wet_scrubber)2;',
  _width: 80,
  _height: 120,
}

export function SeparatorWetScrubber(props: DiagramNodeProps) {
  return (
    <Shape
      {...SEPARATOR_WET_SCRUBBER}
      {...props}
      _style={extendStyle(SEPARATOR_WET_SCRUBBER, props)}
    />
  )
}
