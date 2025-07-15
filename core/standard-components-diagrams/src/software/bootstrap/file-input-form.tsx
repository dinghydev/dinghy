import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FILE_INPUT_FORM = {
  _style:
    'fillColor=#FEFEFE;strokeColor=#AAAAAA;fontSize=14;gradientColor=#F0F0F0;',
  _width: 1,
  _height: 70,
}

export function FileInputForm(props: DiagramNodeProps) {
  return <Shape {...FILE_INPUT_FORM} {...props} />
}
