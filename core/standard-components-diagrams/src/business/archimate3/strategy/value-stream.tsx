import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VALUE_STREAM = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#F5DEAA;shape=mxgraph.archimate3.application;appType=valueStream;archiType=rounded;',
  },
  _width: 150,
  _height: 75,
}

export function ValueStream(props: DiagramNodeProps) {
  return (
    <Shape
      {...VALUE_STREAM}
      {...props}
      _style={extendStyle(VALUE_STREAM, props)}
    />
  )
}
