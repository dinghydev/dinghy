import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SEPARATOR_VENTURI_SCRUBBER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.separators.separator_(venturi_scrubber);',
  },
  _width: 80,
  _height: 120,
}

export function SeparatorVenturiScrubber(props: NodeProps) {
  return (
    <Shape
      {...SEPARATOR_VENTURI_SCRUBBER}
      {...props}
      _style={extendStyle(SEPARATOR_VENTURI_SCRUBBER, props)}
    />
  )
}
