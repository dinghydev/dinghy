import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CHECKBOX_ON_DISABLED_DARK = {
  _style: {
    entity:
      'dashed=0;labelPosition=right;align=left;shape=mxgraph.gmdl.checkbox;strokeColor=none;fillColor=#676767;strokeWidth=2;aspect=fixed;sketch=0;html=1;',
  },
  _width: 0,
  _height: 16,
}

export function CheckboxOnDisabledDark(props: NodeProps) {
  return (
    <Shape
      {...CHECKBOX_ON_DISABLED_DARK}
      {...props}
      _style={extendStyle(CHECKBOX_ON_DISABLED_DARK, props)}
    />
  )
}
