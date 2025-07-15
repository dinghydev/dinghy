import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DIRECTIONAL_CONNECTOR = {
  _style: 'endArrow=classic;html=1;',
  _width: 50,
  _height: 50,
}

export function DirectionalConnector(props: DiagramNodeProps) {
  return <Dependency {...DIRECTIONAL_CONNECTOR} {...props} />
}
