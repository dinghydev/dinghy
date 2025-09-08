import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const IS_CONTROL = {
  _style: {
    entity:
      'html=1;shape=mxgraph.sysml.isControl;whiteSpace=wrap;align=center;',
  },
  _original_width: 300,
  _original_height: 60,
}

export function IsControl(props: DiagramNodeProps) {
  return (
    <Shape {...IS_CONTROL} {...props} _style={extendStyle(IS_CONTROL, props)} />
  )
}
