import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DISABLED_TEXT_FIELD = {
  _style: {
    entity:
      'fillColor=none;strokeColor=none;html=1;fontSize=11;fontStyle=0;align=left;fontColor=#B3BAC5;fontStyle=1;fontSize=11',
  },
  _original_width: 0,
  _original_height: 58,
}

export function DisabledTextField(props: DiagramNodeProps) {
  return (
    <Shape
      {...DISABLED_TEXT_FIELD}
      {...props}
      _style={extendStyle(DISABLED_TEXT_FIELD, props)}
    />
  )
}
