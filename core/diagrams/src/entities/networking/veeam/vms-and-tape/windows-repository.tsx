import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WINDOWS_REPOSITORY = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.windows_repository;',
  },
  _original_width: 53.2,
  _original_height: 49.2,
}

export function WindowsRepository(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, WINDOWS_REPOSITORY)} />
}
