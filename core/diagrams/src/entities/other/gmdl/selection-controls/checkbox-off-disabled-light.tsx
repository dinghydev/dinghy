import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CHECKBOX_OFF_DISABLED_LIGHT = {
  _style: {
    entity:
      'dashed=0;labelPosition=right;align=left;shape=mxgraph.gmdl.checkbox;strokeColor=#B0B0B0;fillColor=none;strokeWidth=2;aspect=fixed;sketch=0;html=1;',
  },
  _width: 0,
  _height: 16,
}

export function CheckboxOffDisabledLight(props: NodeProps) {
  return (
    <Shape
      {...CHECKBOX_OFF_DISABLED_LIGHT}
      {...props}
      _style={extendStyle(CHECKBOX_OFF_DISABLED_LIGHT, props)}
    />
  )
}
