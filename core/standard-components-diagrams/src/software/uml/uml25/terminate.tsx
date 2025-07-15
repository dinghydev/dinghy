import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TERMINATE = {
  _style: 'shape=umlDestroy;html=1;',
  _width: 30,
  _height: 30,
}

export function Terminate(props: DiagramNodeProps) {
  return <Shape {...TERMINATE} {...props} />
}
