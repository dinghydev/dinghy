import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SINGLE_LINE_TEXT_FIELD_DISABLED = {
  _style: {
    entity:
      'shape=line;strokeWidth=1;noLabel=1;strokeColor=#B3B3B3;dashed=1;dashPattern=1 4;',
  },
  _width: 1,
  _height: 35,
}

export function SingleLineTextFieldDisabled(props: DiagramNodeProps) {
  return (
    <Shape
      {...SINGLE_LINE_TEXT_FIELD_DISABLED}
      {...props}
      _style={extendStyle(SINGLE_LINE_TEXT_FIELD_DISABLED, props)}
    />
  )
}
