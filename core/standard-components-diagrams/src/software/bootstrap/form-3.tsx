import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FORM_3 = {
  _style:
    'fillColor=none;strokeColor=none;align=left;spacing=2;fontSize=12;fontColor=#999999;',
  _width: 2,
  _height: 500,
}

export function Form3(props: DiagramNodeProps) {
  return <Shape {...FORM_3} {...props} />
}
