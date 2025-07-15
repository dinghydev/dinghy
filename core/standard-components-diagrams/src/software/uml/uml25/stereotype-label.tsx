import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STEREOTYPE_LABEL = {
  _style: 'text;html=1;align=center;',
  _width: 200,
  _height: 25,
}

export function StereotypeLabel(props: DiagramNodeProps) {
  return <Shape {...STEREOTYPE_LABEL} {...props} />
}
