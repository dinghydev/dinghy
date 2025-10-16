import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const IS_STREAM = {
  _style: {
    entity: 'html=1;shape=mxgraph.sysml.isStream;whiteSpace=wrap;align=center;',
  },
  _width: 300,
  _height: 60,
}

export function IsStream(props: DiagramNodeProps) {
  return (
    <Shape {...IS_STREAM} {...props} _style={extendStyle(IS_STREAM, props)} />
  )
}
