import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const QUANTIZER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.abstract.quantizer;',
  },
  _original_width: 52,
  _original_height: 46,
}

export function Quantizer(props: DiagramNodeProps) {
  return (
    <Shape {...QUANTIZER} {...props} _style={extendStyle(QUANTIZER, props)} />
  )
}
