import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const REGION = {
  _style:
    'line;strokeWidth=1;direction=south;html=1;dashed=1;dashPattern=20 20;',
  _width: 0,
  _height: 100,
}

export function Region(props: DiagramNodeProps) {
  return <Shape {...REGION} {...props} />
}
