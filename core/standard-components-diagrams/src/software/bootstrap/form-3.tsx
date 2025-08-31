import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FORM_3 = {
  _style: {
    entity:
      'fillColor=none;strokeColor=none;align=left;spacing=2;fontSize=12;fontColor=#999999;',
  },
  _width: 2,
  _height: 500,
}

export function Form3(props: DiagramNodeProps) {
  return <Shape {...FORM_3} {...props} _style={extendStyle(FORM_3, props)} />
}
