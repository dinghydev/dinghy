import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CADET_BLUE = {
  _style: 'fillColor=#AEB8C3;strokeColor=none;whiteSpace=wrap;html=1;',
  _width: 50,
  _height: 50,
}

export function CadetBlue(props: DiagramNodeProps) {
  return <Shape {...CADET_BLUE} {...props} />
}
