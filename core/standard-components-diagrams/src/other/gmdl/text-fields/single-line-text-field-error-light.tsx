import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SINGLE_LINE_TEXT_FIELD_ERROR_LIGHT = {
  _style: 'dashed=0;shape=line;strokeWidth=2;noLabel=1;strokeColor=#ff0000;',
  _width: 1,
  _height: 55,
}

export function SingleLineTextFieldErrorLight(props: DiagramNodeProps) {
  return <Shape {...SINGLE_LINE_TEXT_FIELD_ERROR_LIGHT} {...props} />
}
