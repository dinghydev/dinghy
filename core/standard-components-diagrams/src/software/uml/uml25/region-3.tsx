import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const REGION_3 = {
  _style: 'text;align=left;',
  _width: 2,
  _height: 100,
}

export function Region3(props: DiagramNodeProps) {
  return <Shape {...REGION_3} {...props} />
}
