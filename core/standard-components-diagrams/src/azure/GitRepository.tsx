import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GIT_REPOSITORY = {
  _color: { color: '#00BEF2', fill: true },
  _border: 1,
  _shape: 'mxgraph.azure.git_repository',
}

export function GitRepository(props: DiagramNodeProps) {
  return <Shape {...GIT_REPOSITORY} {...props} />
}
