import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SINGLE_LINE_TEXT_FIELD_NORMAL_LIGHT = {
  _style: 'dashed=0;shape=line;strokeWidth=1;noLabel=1;strokeColor=#eeeeee;',
  _width: 1,
  _height: 35,
}

export function SingleLineTextFieldNormalLight(props: DiagramNodeProps) {
  return <Shape {...SINGLE_LINE_TEXT_FIELD_NORMAL_LIGHT} {...props} />
}
