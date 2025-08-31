import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FILE_INPUT_FORM = {
  _style: {
    entity:
      'fillColor=#FEFEFE;strokeColor=#AAAAAA;fontSize=14;gradientColor=#F0F0F0;',
  },
  _width: 1,
  _height: 70,
}

export function FileInputForm(props: DiagramNodeProps) {
  return (
    <Shape
      {...FILE_INPUT_FORM}
      {...props}
      _style={extendStyle(FILE_INPUT_FORM, props)}
    />
  )
}
