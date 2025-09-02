import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const POWERED = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.powered;',
  },
  _original_width: 36,
  _original_height: 36,
}

export function Powered(props: DiagramNodeProps) {
  return <Shape {...POWERED} {...props} _style={extendStyle(POWERED, props)} />
}
