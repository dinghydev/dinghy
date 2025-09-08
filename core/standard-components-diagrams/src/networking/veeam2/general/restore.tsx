import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const RESTORE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.restore;',
  },
  _original_width: 28.000000000000004,
  _original_height: 28.000000000000004,
}

export function Restore(props: DiagramNodeProps) {
  return <Shape {...RESTORE} {...props} _style={extendStyle(RESTORE, props)} />
}
