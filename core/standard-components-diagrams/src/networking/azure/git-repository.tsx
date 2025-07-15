import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GIT_REPOSITORY = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.git_repository;',
  _width: 50,
  _height: 50,
}

export function GitRepository(props: DiagramNodeProps) {
  return <Shape {...GIT_REPOSITORY} {...props} />
}
