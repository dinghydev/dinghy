import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GIT_REPOSITORY = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.git_repository;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function GitRepository(props: DiagramNodeProps) {
  return (
    <Shape
      {...GIT_REPOSITORY}
      {...props}
      _style={extendStyle(GIT_REPOSITORY, props)}
    />
  )
}
