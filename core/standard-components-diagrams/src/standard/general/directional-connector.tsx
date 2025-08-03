import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DIRECTIONAL_CONNECTOR = {
  _style: {
    dependency: 'endArrow=classic;html=1;',
  },
}

export function DirectionalConnector(props: DiagramNodeProps) {
  return <Dependency {...DIRECTIONAL_CONNECTOR} {...props} />
}
