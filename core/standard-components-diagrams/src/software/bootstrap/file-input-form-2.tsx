import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FILE_INPUT_FORM_2 = {
  _style: {
    entity: 'fillColor=none;strokeColor=none;align=left;fontSize=14;spacing=5;',
  },
  _original_width: 2,
  _original_height: 70,
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
