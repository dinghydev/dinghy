import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LINE_CONCENTRATOR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.transmission.line_concentrator;',
  },
  _original_width: 130,
  _original_height: 130,
}

export function LineConcentrator(props: NodeProps) {
  return (
    <Shape
      {...LINE_CONCENTRATOR}
      {...props}
      _style={extendStyle(LINE_CONCENTRATOR, props)}
    />
  )
}
