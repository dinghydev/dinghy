import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ANDROID_PHONE = {
  _style: {
    entity:
      'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.mscae.enterprise.android_phone',
  },
  _width: 30,
  _height: 50,
}

export function AndroidPhone(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ANDROID_PHONE)} />
}
