import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VALUE_STREAM = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#F5DEAA;shape=mxgraph.archimate3.application;appType=valueStream;archiType=rounded;',
  },
  _original_width: 150,
  _original_height: 75,
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
