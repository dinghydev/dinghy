import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SINGLE_LINE_TEXT_FIELD_NORMAL_LIGHT_3 = {
  _style: 'dashed=0;shape=line;strokeWidth=2;noLabel=1;strokeColor=#1F9BFD;',
  _width: 2,
  _height: 55,
}

export function SingleLineTextFieldNormalLight3(props: DiagramNodeProps) {
  return <Shape {...SINGLE_LINE_TEXT_FIELD_NORMAL_LIGHT_3} {...props} />
}
