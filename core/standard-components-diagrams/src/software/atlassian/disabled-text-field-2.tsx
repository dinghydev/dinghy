import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DISABLED_TEXT_FIELD_2 = {
  _style: {
    entity:
      'rounded=1;arcSize=9;fillColor=#F7F8F9;align=left;spacingLeft=5;strokeColor=#DEE1E6;html=1;strokeWidth=2;fontColor=#B3BAC5;fontSize=12',
  },
  _original_width: 1,
  _original_height: 58,
}

export function DisabledTextField2(props: DiagramNodeProps) {
  return (
    <Shape
      {...DISABLED_TEXT_FIELD_2}
      {...props}
      _style={extendStyle(DISABLED_TEXT_FIELD_2, props)}
    />
  )
}
