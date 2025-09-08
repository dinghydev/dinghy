import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const IS_STREAM_4 = {
  _style: {
    entity:
      'html=1;shape=mxgraph.sysml.isActStream;align=left;spacingLeft=5;verticalAlign=top;spacingTop=-3;whiteSpace=wrap;',
  },
  _original_width: 0,
  _original_height: 100,
}

export function IsStream4(props: DiagramNodeProps) {
  return (
    <Shape
      {...IS_STREAM_4}
      {...props}
      _style={extendStyle(IS_STREAM_4, props)}
    />
  )
}
