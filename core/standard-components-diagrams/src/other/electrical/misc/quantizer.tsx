import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const QUANTIZER = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.abstract.quantizer;',
  _width: 52,
  _height: 46,
}

export function Quantizer(props: DiagramNodeProps) {
  return (
    <Shape {...QUANTIZER} {...props} _style={extendStyle(QUANTIZER, props)} />
  )
}
