import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SEPARATOR_VENTURI_SCRUBBER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.separators.separator_(venturi_scrubber);',
  },
  _original_width: 80,
  _original_height: 120,
}

export function SeparatorVenturiScrubber(props: DiagramNodeProps) {
  return (
    <Shape
      {...SEPARATOR_VENTURI_SCRUBBER}
      {...props}
      _style={extendStyle(SEPARATOR_VENTURI_SCRUBBER, props)}
    />
  )
}
