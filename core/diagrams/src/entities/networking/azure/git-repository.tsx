import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const GIT_REPOSITORY = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.git_repository;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function GitRepository(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, GIT_REPOSITORY)} />
}
