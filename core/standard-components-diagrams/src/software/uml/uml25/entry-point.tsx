import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ENTRY_POINT = {
  _style: 'ellipse;',
  _width: 30,
  _height: 30,
}

export function EntryPoint(props: DiagramNodeProps) {
  return <Shape {...ENTRY_POINT} {...props} />
}
