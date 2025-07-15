import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SINGLE_LINE_TEXT_FIELD_PRESS_2 = {
  _style:
    'dashed=0;shape=line;strokeWidth=2;noLabel=1;strokeColor=#0C8CF2;opacity=50;',
  _width: 1,
  _height: 35,
}

export function SingleLineTextFieldPress2(props: DiagramNodeProps) {
  return <Shape {...SINGLE_LINE_TEXT_FIELD_PRESS_2} {...props} />
}
