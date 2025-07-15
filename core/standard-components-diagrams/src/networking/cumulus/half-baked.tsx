import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const HALF_BAKED = {
  _style: 'fillColor=#78CDD1;strokeColor=none;whiteSpace=wrap;html=1;',
  _width: 50,
  _height: 50,
}

export function HalfBaked(props: DiagramNodeProps) {
  return <Shape {...HALF_BAKED} {...props} />
}
