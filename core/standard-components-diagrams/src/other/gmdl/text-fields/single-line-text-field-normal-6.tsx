import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SINGLE_LINE_TEXT_FIELD_NORMAL_6 = {
  _style:
    'shape=line;strokeWidth=1;noLabel=1;strokeColor=#999999;dashed=1;dashPattern=1 4;opacity=80;',
  _width: 2,
  _height: 55,
}

export function SingleLineTextFieldNormal6(props: DiagramNodeProps) {
  return <Shape {...SINGLE_LINE_TEXT_FIELD_NORMAL_6} {...props} />
}
