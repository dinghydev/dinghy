import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

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
