import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CHECKBOX_ON_DISABLED_FOCUSED_LIGHT = {
  _style: {
    entity:
      'shape=ellipse;labelPosition=right;align=left;strokeColor=none;fillColor=#B0B0B0;opacity=10;sketch=0;html=1;',
  },
  _width: 0,
  _height: 48,
}

export function CheckboxOnDisabledFocusedLight(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, CHECKBOX_ON_DISABLED_FOCUSED_LIGHT)}
    />
  )
}
