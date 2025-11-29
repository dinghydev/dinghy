import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PROCESS = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.process;',
  },
  _original_width: 52,
  _original_height: 62,
}

export function Process(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PROCESS)} />
}
