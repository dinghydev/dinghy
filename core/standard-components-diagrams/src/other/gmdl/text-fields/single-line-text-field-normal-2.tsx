import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SINGLE_LINE_TEXT_FIELD_NORMAL_2 = {
  _style:
    'dashed=0;shape=line;strokeWidth=1;noLabel=1;strokeColor=#eeeeee;opacity=50;',
  _width: 1,
  _height: 35,
}

export function SingleLineTextFieldNormal2(props: DiagramNodeProps) {
  return <Shape {...SINGLE_LINE_TEXT_FIELD_NORMAL_2} {...props} />
}
