import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const UNIDENTIFIED_CODE_OBJECT = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.unidentified_code_object;',
  },
  _original_width: 50,
  _original_height: 42.5,
}

export function UnidentifiedCodeObject(props: NodeProps) {
  return (
    <Shape
      {...UNIDENTIFIED_CODE_OBJECT}
      {...props}
      _style={extendStyle(UNIDENTIFIED_CODE_OBJECT, props)}
    />
  )
}
