import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VALUE_STREAM_2 = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#F5DEAA;shape=mxgraph.archimate3.valueStream;',
  },
  _original_width: 70,
  _original_height: 35,
}

export function ValueStream2(props: DiagramNodeProps) {
  return (
    <Shape
      {...VALUE_STREAM_2}
      {...props}
      _style={extendStyle(VALUE_STREAM_2, props)}
    />
  )
}
