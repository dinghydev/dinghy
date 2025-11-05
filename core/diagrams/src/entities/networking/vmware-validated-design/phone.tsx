import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PHONE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#434445;aspect=fixed;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.vvd.phone;',
  },
  _width: 29.5,
  _height: 50,
}

export function Phone(props: NodeProps) {
  return <Shape {...PHONE} {...props} _style={extendStyle(PHONE, props)} />
}
