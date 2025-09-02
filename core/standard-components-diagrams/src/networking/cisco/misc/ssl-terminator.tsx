import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SSL_TERMINATOR = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.ssl_terminator;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 64,
  _original_height: 59,
}

export function SslTerminator(props: DiagramNodeProps) {
  return (
    <Shape
      {...SSL_TERMINATOR}
      {...props}
      _style={extendStyle(SSL_TERMINATOR, props)}
    />
  )
}
