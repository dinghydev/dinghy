import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FORM = {
  _style: 'fillColor=none;strokeColor=none;align=left;fontSize=14;',
  _width: 0,
  _height: 500,
}

export function Form(props: DiagramNodeProps) {
  return <Shape {...FORM} {...props} />
}
