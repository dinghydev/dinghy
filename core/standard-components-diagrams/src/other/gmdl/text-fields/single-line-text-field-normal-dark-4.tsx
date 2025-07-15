import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SINGLE_LINE_TEXT_FIELD_NORMAL_DARK_4 = {
  _style: 'dashed=0;shape=line;strokeWidth=1;noLabel=1;strokeColor=#999999;',
  _width: 2,
  _height: 55,
}

export function SingleLineTextFieldNormalDark4(props: DiagramNodeProps) {
  return <Shape {...SINGLE_LINE_TEXT_FIELD_NORMAL_DARK_4} {...props} />
}
