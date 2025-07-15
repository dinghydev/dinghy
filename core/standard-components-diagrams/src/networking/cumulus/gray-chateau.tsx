import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GRAY_CHATEAU = {
  _style: 'fillColor=#8C9AA6;strokeColor=none;whiteSpace=wrap;html=1;',
  _width: 50,
  _height: 50,
}

export function GrayChateau(props: DiagramNodeProps) {
  return <Shape {...GRAY_CHATEAU} {...props} />
}
