import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LIMITED_SPRUCE = {
  _style: 'fillColor=#36424A;strokeColor=none;whiteSpace=wrap;html=1;',
  _width: 50,
  _height: 50,
}

export function LimitedSpruce(props: DiagramNodeProps) {
  return <Shape {...LIMITED_SPRUCE} {...props} />
}
