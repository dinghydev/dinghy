import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const REGION = {
  _style: {
    group:
      'rounded=1;arcSize=10;dashed=1;fillColor=none;gradientColor=none;dashPattern=1 1;strokeWidth=2;',
  },
}

export function Region(props: DiagramNodeProps) {
  return <Shape {...REGION} {...props} />
}
