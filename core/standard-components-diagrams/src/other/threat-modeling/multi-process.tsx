import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MULTI_PROCESS = {
  _style: 'ellipse;shape=doubleEllipse;whiteSpace=wrap;html=1;aspect=fixed;',
  _width: 80,
  _height: 80,
}

export function MultiProcess(props: DiagramNodeProps) {
  return <Shape {...MULTI_PROCESS} {...props} />
}
