import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CHECKBOX_ON_DISABLED_LIGHT = {
  _style: {
    entity:
      'dashed=0;labelPosition=right;align=left;shape=mxgraph.gmdl.checkbox;strokeColor=none;fillColor=#B0B0B0;strokeWidth=2;aspect=fixed;sketch=0;html=1;',
  },
  _width: 0,
  _height: 16,
}

export function CheckboxOnDisabledLight(props: DiagramNodeProps) {
  return (
    <Shape
      {...CHECKBOX_ON_DISABLED_LIGHT}
      {...props}
      _style={extendStyle(CHECKBOX_ON_DISABLED_LIGHT, props)}
    />
  )
}
