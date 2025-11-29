import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DISABLED_TEXT_FIELD_2 = {
  _style: {
    entity:
      'rounded=1;arcSize=9;fillColor=#F7F8F9;align=left;spacingLeft=5;strokeColor=#DEE1E6;html=1;strokeWidth=2;fontColor=#B3BAC5;fontSize=12',
  },
  _width: 1,
  _height: 58,
}

export function DisabledTextField2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DISABLED_TEXT_FIELD_2)} />
}
