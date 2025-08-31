import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FILE_INPUT_FORM_2 = {
  _style: 'fillColor=none;strokeColor=none;align=left;fontSize=14;spacing=5;',
  _width: 2,
  _height: 70,
}

export function FileInputForm2(props: DiagramNodeProps) {
  return (
    <Shape
      {...FILE_INPUT_FORM_2}
      {...props}
      _style={extendStyle(FILE_INPUT_FORM_2, props)}
    />
  )
}
