import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DISABLED_TEXT_FIELD = {
  _style: {
    entity:
      'fillColor=none;strokeColor=none;html=1;fontSize=11;fontStyle=0;align=left;fontColor=#B3BAC5;fontStyle=1;fontSize=11',
  },
  _width: 0,
  _height: 58,
}

export function DisabledTextField(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DISABLED_TEXT_FIELD)} />
}
