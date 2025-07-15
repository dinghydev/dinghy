import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const REGION_2 = {
  _style: 'text;align=right;',
  _width: 1,
  _height: 100,
}

export function Region2(props: DiagramNodeProps) {
  return <Shape {...REGION_2} {...props} />
}
