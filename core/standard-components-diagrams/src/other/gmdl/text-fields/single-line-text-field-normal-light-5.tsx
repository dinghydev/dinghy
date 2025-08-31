import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SINGLE_LINE_TEXT_FIELD_NORMAL_LIGHT_5 = {
  _style: {
    entity: 'dashed=0;shape=line;strokeWidth=2;noLabel=1;strokeColor=#eeeeee;',
  },
  _width: 2,
  _height: 55,
}

export function SingleLineTextFieldNormalLight5(props: DiagramNodeProps) {
  return (
    <Shape
      {...SINGLE_LINE_TEXT_FIELD_NORMAL_LIGHT_5}
      {...props}
      _style={extendStyle(SINGLE_LINE_TEXT_FIELD_NORMAL_LIGHT_5, props)}
    />
  )
}
