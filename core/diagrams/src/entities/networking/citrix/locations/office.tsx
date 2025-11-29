import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const OFFICE = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.office;',
  },
  _original_width: 50,
  _original_height: 49.230000000000004,
}

export function Office(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, OFFICE)} />
}
