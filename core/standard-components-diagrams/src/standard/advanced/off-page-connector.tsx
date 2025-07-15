import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const OFF_PAGE_CONNECTOR = {
  _style: 'shape=offPageConnector;whiteSpace=wrap;html=1;',
  _width: 80,
  _height: 80,
}

export function OffPageConnector(props: DiagramNodeProps) {
  return <Shape {...OFF_PAGE_CONNECTOR} {...props} />
}
